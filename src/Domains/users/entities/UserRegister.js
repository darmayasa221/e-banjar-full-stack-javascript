/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
class UserRegister {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      name,
      ktp,
      current_address,
      old_address,
    } = payload;
    this.name = name;
    this.ktp = ktp;
    this.current_address = current_address;
    this.old_address = old_address;
    this.created_at = new Date().toDateString();
    this.updated_at = '';
  }

  _verifyPayload({
    name,
    ktp,
    current_address,
    old_address,
  }) {
    if (!name || !ktp || !current_address || !old_address) {
      throw new Error('USER_REGISTER.NOT_CONTAIN_NEEDED_PROPERT');
    }
    if (
      typeof name !== 'string'
      || typeof ktp !== 'number'
      || typeof current_address !== 'string'
      || typeof old_address !== 'string'
    ) {
      throw new Error('USER_REGISTER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
    if (`${ktp}`.length > 16) {
      throw new Error('USER_REGISTER.KTP_OF_LENGTH_GREETER_THEN_16');
    }
  }
}

module.exports = UserRegister;
