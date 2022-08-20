/* eslint-disable no-useless-constructor */
const AuthorizationError = require('@Commons/exceptions/AuthorizationError');
const AuthenticationRepository = require('@Domains/authentications/AuthenticationRepository');

class AuthenticationRepositoryWebStorage extends AuthenticationRepository {
  constructor() {
    super();
  }

  addToken(payload) {
    const authentication = JSON.parse(localStorage.getItem('authentications' || ''));
    if (!authentication) {
      localStorage.setItem('authentications', JSON.stringify(payload));
    }
    localStorage.clear();
    localStorage.setItem('authentications', JSON.stringify(payload));
  }

  checkAvailabilityToken() {
    const authentication = JSON.parse(localStorage.getItem('authentications' || ''));
    if (!authentication) {
      throw new AuthorizationError('sesi sudah habis silahkan login kembali');
    }
    return authentication;
  }

  deleteToken() {
    localStorage.clear();
  }
}

module.exports = AuthenticationRepositoryWebStorage;
