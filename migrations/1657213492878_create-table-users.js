/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(250)',
      notNull: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    ktp: {
      type: 'INT',
      notNull: true,
      unique: true,
    },
    current_address: {
      type: 'TEXT',
      notNull: true,
    },
    old_address: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
    updated_at: {
      type: 'TEXT',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
