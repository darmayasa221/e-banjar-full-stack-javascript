class NewAuth {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      name,
      accessToken,
      refreshToken,
    } = payload;
    this.name = name;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  _verifyPayload({
    accessToken, refreshToken, name,
  }) {
    if (!accessToken || !refreshToken || !name) {
      throw new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof accessToken !== 'string' || typeof refreshToken !== 'string' || typeof name !== 'string') {
      throw new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = NewAuth;
