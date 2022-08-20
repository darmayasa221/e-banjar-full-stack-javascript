const UserRepository = require('@Domains/users/UserRepository');

class UserRepositoryApi extends UserRepository {
  constructor(apiEndpoint) {
    super();
    this._apiEndpoint = apiEndpoint;
  }

  async registerUser(payload) {
    const responseJson = await fetch(`${this._apiEndpoint.API_EBANJAR}/users`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const response = await responseJson.json();
    return response;
  }

  async postAuthentication(payload) {
    const responseJson = await fetch(`${this._apiEndpoint.API_EBANJAR}/authentications`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const response = await responseJson.json();
    return response;
  }

  async deleteAuthentication(payload) {
    const responseJson = await fetch(`${this._apiEndpoint.API_EBANJAR}/authentications`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'DELETE',
      body: JSON.stringify(payload),
    });
    const response = await responseJson.json();
    return response;
  }

  async getUserAccess(authentication) {
    const responseJson = await fetch(`${this._apiEndpoint.API_EBANJAR}/authorizations`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${authentication.accessToken}`,
      },
      method: 'GET',
    });
    const response = await responseJson.json();
    return response;
  }
}

module.exports = UserRepositoryApi;
