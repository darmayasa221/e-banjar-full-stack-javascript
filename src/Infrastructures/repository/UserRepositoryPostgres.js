/* eslint-disable camelcase */
const UserRepository = require('../../Domains/users/UserRepository');

class UserRepositoryPostgres extends UserRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async registerUser(payload) {
    const {
      name,
      ktp,
      current_address,
      old_address,
      created_at,
      updated_at,
    } = payload;
    const id = `user-${this._idGenerator()}`;
    const query = {
      text: `INSERT INTO users
      VALUES($1,$2,$3,$4,$5,$6,$7)`,
      vlaues: [id, name, ktp, current_address, old_address, created_at, updated_at],
    };

    await this._pool.query(query);
  }

  async verifyAvailableKtp(ktp) {
    const query = {
      text: `SELECT id
      FROM users
      WHERE ktp = $1`,
      values: [ktp],
    };
    await this.pool.query(query);
  }
}

module.exports = UserRepositoryPostgres;
