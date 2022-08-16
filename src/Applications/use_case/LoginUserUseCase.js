/* eslint-disable no-unsafe-finally */
const ClientError = require('../../Commons/exceptions/ClientError');

class LoginUserUseCase {
  constructor({ userRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
  }

  async execute(payload) {
    let result;
    try {
      console.log('a');
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

  _verifyPayload({ username, password }) {
    const newState = {
      username: Number.isNaN(Number(username)) ? 'text' : Number(username),
      password: Number.isNaN(Number(username)) ? 'text' : Number(password),
    };
    return newState;
  }
}

module.exports = LoginUserUseCase;
