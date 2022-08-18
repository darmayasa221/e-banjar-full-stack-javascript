/* eslint-disable no-unsafe-finally */
const ClientError = require('../../Commons/exceptions/ClientError');
const NewAuth = require('../../Domains/authentications/entities/NewAuth');
const LoginUser = require('../../Domains/users/entities/LoginUser');

class LoginUserUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
  }

  async execute(payload) {
    let result;
    try {
      const payloadVerify = this._verifyPayload(payload);
      const newPayload = new LoginUser(payloadVerify);
      const authentications = await this._userRepository.loginUser(newPayload);
      const newAuth = new NewAuth(authentications.data);
      this._authenticationRepository.addToken(newAuth);
      result = authentications;
    } catch (error) {
      result = error;
    } finally {
      return this._verifyResult(result);
    }
  }

  _verifyResult(result) {
    const translatedError = this._domainErrorTranslator.translate(result);
    if (translatedError instanceof ClientError) {
      return {
        status: translatedError.name,
        message: translatedError.message,
      };
    }
    return {
      status: result.status,
      message: result.message,
      data: {
        nama: result.nama || '',
      },
    };
  }

  _verifyPayload({ username, password }) {
    const newState = {
      username: Number.isNaN(Number(username)) ? 'text' : Number(username),
      password: Number.isNaN(Number(username)) ? 'text' : Number(password),
    };
    return newState;
  }
}

module.exports = LoginUserUseCase;
