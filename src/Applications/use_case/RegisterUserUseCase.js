/* eslint-disable no-unsafe-finally */
const RegisterUser = require('../../Domains/users/entities/RegisterUser');
const ClientError = require('../../Commons/exceptions/ClientError');

class RegisterUserUseCase {
  constructor({ userRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
  }

  async execute(payload) {
    let result;
    try {
      const newPayload = new RegisterUser(payload);
      result = await this._userRepository.registerUser(newPayload);
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
    return result;
  }
}

module.exports = RegisterUserUseCase;
