const PasswordHash = require('../../Applications/security/PasswordHash');

class BcryptPasswordHash extends PasswordHash {
  constructor(bcyrpt, saltRound = 10) {
    super();
    this._bcyrp = bcyrpt;
    this._saltRound = saltRound;
  }

  async hash(password) {
    return this._bcyrp.hash(password, this._saltRound);
  }
}

module.exports = BcryptPasswordHash;
