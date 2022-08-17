/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class NewAuth {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      name,
      id_access,
      accessToken,
      refreshToken,
    } = payload;
    this.name = name;
    this.id_access = id_access;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  _verifyPayload({
    accessToken, refreshToken, id_access, name,
  }) {
    if (!accessToken || !refreshToken || !id_access || !name) {
      throw new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof accessToken !== 'string' || typeof refreshToken !== 'string' || typeof id_access !== 'string' || typeof name !== 'string') {
      throw new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = NewAuth;
