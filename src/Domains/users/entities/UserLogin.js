/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class UserLogin {
  constructor(payload) {
    this._verifyPayload(payload);
    const { username, password } = payload;
    this.username = username;
    this.password = password;
  }

  _verifyPayload({ username, password }) {
    if (!username || !password) {
      throw new Error('USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof username !== 'number' || typeof password !== 'number') {
      throw new Error('USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = UserLogin;
