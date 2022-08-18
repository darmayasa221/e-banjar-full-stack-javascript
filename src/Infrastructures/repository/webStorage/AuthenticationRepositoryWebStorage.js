/* eslint-disable no-useless-constructor */
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');

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
      throw new Error('silahkan login ulang');
    }
    return authentication;
  }

  deleteToken() {
    localStorage.clear();
  }
}

module.exports = AuthenticationRepositoryWebStorage;
