/* eslint-disable no-unsafe-finally */
const ClientError = require('../../Commons/exceptions/ClientError');

class LogoutUserUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
  }

  async execute() {
    let result;
    try {
      const authentications = this._authenticationRepository.checkAvailabilityToken();
      this._authenticationRepository.deleteToken();
      result = await this._userRepository.logoutUser({ refreshToken: authentications.refreshToken });
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
}

module.exports = LogoutUserUseCase;
