/* eslint-disable camelcase */
const InvariantError = require('../../Commons/exceptions/InvariantError');
const NotFoundError = require('../../Commons/exceptions/NotFoundError');
const UserRepository = require('../../Domains/users/UserRepository');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

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
      values: [
        id, name, password, ktp, current_address, old_address, created_at, updated_at, id_access,
      ],
    };

    await this._pool.query(query);
  }

  async verifyUsername(username) {
    const query = {
      text: `SELECT id, name, ktp
      FROM users
      WHERE ktp = $1`,
      values: [username],
    };
    const { rows, rowCount } = await this._pool.query(query);
    if (!rowCount) {
      throw new InvariantError('login gagal, pengguna tidak ditemukan');
    }
    return rows[0];
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

  async getPasswordById(id) {
    const query = {
      text: `SELECT password
      FROM users
      WHERE id = $1`,
      values: [id],
    };
    const { rowCount, rows } = await this._pool.query(query);
    if (!rowCount) {
      throw new InvariantError('login gagal, pengguna tidak ditemukan');
    }
    return rows[0].password;
  }

  async getAccessById(id) {
    const query = {
      text: `SELECT access.access
      FROM users
      RIGHT JOIN access ON users.id_access = access.id
      WHERE users.id = $1`,
      values: [id],
    };
    const { rows } = await this._pool.query(query);
    return rows[0];
  }

  async verifyUser(payload) {
    const { id, ktp } = payload;
    const query = {
      text: `SELECT ktp, name
      FROM users
      WHERE id = $1`,
      values: [id],
    };
    const { rowCount, rows } = await this._pool.query(query);
    if (!rowCount) {
      throw new NotFoundError('id tidak ditemukan');
    }
    if (rows[0].ktp !== ktp) {
      throw new AuthorizationError('tidak dapat melakukan access ke resource');
    }
    return rows[0].name;
  }

  async verifyUserAccess(access) {
    const query = {
      text: `SELECT id
      FROM access
      WHERE access = $1`,
      values: [access],
    };
    const { rows } = await this._pool.query(query);
    const id = Number(rows[0].id);
    return id;
  }
}

module.exports = UserRepositoryPostgres;
