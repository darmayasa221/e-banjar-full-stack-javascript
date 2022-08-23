/* eslint-disable no-unsafe-finally */
const ClientError = require('@Commons/exceptions/ClientError');

class LogoutUserUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
    this._data = {};
  }

  async execute() {
    try {
      const authentications = this._authenticationRepository.checkAvailabilityToken();
      this._authenticationRepository.deleteToken();
      this._data = await this._userRepository.deleteAuthentication({ refreshToken: authentications.refreshToken });
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
    };
  }
}

module.exports = LogoutUserUseCase;
