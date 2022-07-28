/* eslint-disable max-len */
/* eslint-disable camelcase */
/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const UsersTableTestHelper = {
  async registerUser({
    id = 'user-',
    name = 'darma',
    password = 'secret',
    ktp = 1234567890123456,
    current_address = 'alamat sekrang',
    old_address = 'alamat sebelumnya',
    created_at = new Date().toISOString(),
    updated_at = '',
    id_access = '1',
  }) {
    const query = {
      text: `INSERT INTO users
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      values: [id, name, password, ktp, current_address, old_address, created_at, updated_at, id_access],
    };
    await pool.query(query);
  },

  async findUserByKtp(ktp) {
    const query = {
      text: `SELECT * FROM users
      WHERE ktp = $1`,
      values: [ktp],
    };

    const { rows } = await pool.query(query);
    return rows;
  },

  async cleanTable() {
    await pool.query('TRUNCATE TABLE users');
  },
};

module.exports = UsersTableTestHelper;
