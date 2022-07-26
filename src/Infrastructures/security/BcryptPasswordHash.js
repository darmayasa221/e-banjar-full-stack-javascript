const PasswordHash = require('../../Applications/security/PasswordHash');
const AuthenticationError = require('../../Commons/exceptions/AuthenticationError');

class BcryptPasswordHash extends PasswordHash {
  constructor(bcyrpt, saltRound = 10) {
    super();
    this._bcyrpt = bcyrpt;
    this._saltRound = saltRound;
  }

  async hash(password) {
    return this._bcyrpt.hash(password.toString(), this._saltRound);
  }

  async comparePassword(password, hashedPassword) {
    const match = await this._bcyrpt.compare(password.toString(), hashedPassword);
    if (!match) {
      throw new AuthenticationError('massukkan password dengan benar');
    }
  }
}

module.exports = BcryptPasswordHash;
