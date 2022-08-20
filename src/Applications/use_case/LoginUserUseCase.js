/* eslint-disable no-unsafe-finally */
const ClientError = require('@Commons/exceptions/ClientError');
const NewAuth = require('@Domains/authentications/entities/NewAuth');
const LoginUser = require('@Domains/users/entities/LoginUser');

class LoginUserUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
    this._data = {};
  }

  async execute(useCasePayload) {
    try {
      const newPayload = this._verifyPayload(useCasePayload);
      const loginUser = new LoginUser(newPayload);
      const response = await this._userRepository.postAuthentication(loginUser);
      const newAuth = new NewAuth(response.data);
      this._authenticationRepository.addToken(newAuth);
      this._data = response;
    } catch (error) {
      this._data = error;
    } finally {
      return this._verifyResult(this._data);
    }
  }

  _verifyResult(data) {
    const translatedError = this._domainErrorTranslator.translate(data);
    if (translatedError instanceof ClientError) {
      return {
        status: translatedError.name,
        message: translatedError.message,
      };
    }
    return {
      status: data.status,
      message: data.message,
      data: {
        nama: data.nama || '',
      },
    };
  }

  _verifyPayload({ username, password }) {
    const newPayload = {
      username: Number.isNaN(Number(username)) ? 'text' : Number(username),
      password: Number.isNaN(Number(username)) ? 'text' : Number(password),
    };
    return newPayload;
  }
}

module.exports = LoginUserUseCase;
