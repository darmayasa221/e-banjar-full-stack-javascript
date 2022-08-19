class Authorizationed {
  constructor(payload) {
    this._verifyPayload(payload);
    const { name, id } = payload;
    this.name = name;
    this.idAccess = id;
  }

  _verifyPayload({ name, id }) {
    if (!name || !id) {
      throw new Error('AUTHORIZATIONED.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof name !== 'string' || typeof id !== 'number') {
      throw new Error('AUTHORIZATIONED.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = Authorizationed;
