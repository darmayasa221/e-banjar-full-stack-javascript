/* eslint-disable no-unsafe-finally */
const RegisterUser = require('@Domains/users/entities/RegisterUser');
const ClientError = require('@Commons/exceptions/ClientError');

class RegisterUserUseCase {
  constructor({ userRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._data = {};
  }

  async execute(useCasePayload) {
    try {
      const newPayload = new RegisterUser(useCasePayload);
      this._data = await this._userRepository.registerUser(newPayload);
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
    return data;
  }
}

module.exports = RegisterUserUseCase;
