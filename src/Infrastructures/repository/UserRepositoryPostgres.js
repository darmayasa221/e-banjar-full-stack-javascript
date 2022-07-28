/* eslint-disable max-len */
/* eslint-disable camelcase */
const InvariantError = require('../../Commons/exceptions/InvariantError');
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
      password,
      current_address,
      old_address,
    } = payload;
    const created_at = new Date().toDateString();
    const updated_at = '';
    const id_access = '1'; // 1 = users, 2 = admin, 3 = root
    const id = `user-${this._idGenerator()}`;
    const query = {
      text: `INSERT INTO users
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      values: [id, name, password, ktp, current_address, old_address, created_at, updated_at, id_access],
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
    const { rowCount } = await this._pool.query(query);
    if (rowCount) {
      throw new InvariantError('registrasi gagal. ktp yang dimasukkan salah');
    }
  }

  async getNameByKtp(ktp) {
    const query = {
      text: `SELECT name
      FROM users
      WHERE ktp = $1`,
      values: [ktp],
    };
    const { rowCount, rows } = await this._pool.query(query);
    if (!rowCount) {
      throw new InvariantError('pengguna tidak ditemukan');
    }
    return rows[0].name;
  }

  async getPasswordByKtp(ktp) {
    const query = {
      text: `SELECT password
      FROM users
      WHERE ktp = $1`,
      values: [ktp],
    };
    const { rowCount, rows } = await this._pool.query(query);
    if (!rowCount) {
      throw new InvariantError('pengguna tidak ditemukan');
    }
    return rows[0].password;
  }

  async getAccessByKtp(ktp) {
    const query = {
      text: `SELECT access.access
      FROM users
      RIGHT JOIN access ON users.id_access = access.id
      WHERE users.ktp = $1`,
      values: [ktp],
    };
    const { rows } = await this._pool.query(query);
    return rows[0].access;
  }
}

module.exports = UserRepositoryPostgres;
