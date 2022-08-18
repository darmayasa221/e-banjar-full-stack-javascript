/* eslint-disable no-unsafe-finally */
const ClientError = require('../../Commons/exceptions/ClientError');

class GetUserByKtpUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
  }

  async execute() {
    let result;
    try {
      const authentication = this._authenticationRepository.checkAvailabilityToken();
      const data = await this._userRepository.getUserByKtp(authentication);
      result = data;
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
      message: result.message || `selamat datang ${result.data.nama}`,
      data: result.data || {},
    };
  }
}

module.exports = GetUserByKtpUseCase;
