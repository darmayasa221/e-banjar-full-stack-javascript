/* eslint-disable no-unsafe-finally */
const ClientError = require('@Commons/exceptions/ClientError');
const Authorizationed = require('@Domains/authorizations/entities/Authorizationed');

class AuthorizationUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
    this._data = {};
  }

  async execute() {
    try {
      const authentication = this._authenticationRepository.checkAvailabilityToken();
      const { data: { name, idAccess: id }, status } = await this._userRepository.getUserAccess(authentication);
      const autorizationed = new Authorizationed({ name, id });
      this._data = { status, data: { ...autorizationed } };
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
      message: data.message || `selamat datang ${data.data.name}`,
      data: data.data || {},
    };
  }
}

module.exports = AuthorizationUseCase;
