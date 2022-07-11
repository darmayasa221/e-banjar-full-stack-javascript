const PasswordHash = require('../../Applications/security/PasswordHash');

class BcryptPasswordHash extends PasswordHash {

  constructor(bcyrpt, saltRound = 10) {
    super();
    this._bcyrpt = bcyrpt;
    this._saltRound = saltRound;
  }

  async hash(password) {
    return this._bcyrpt.hash(password.toString(), this._saltRound);
  }
}

module.exports = BcryptPasswordHash;
