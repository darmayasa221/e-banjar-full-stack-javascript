/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('access', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    access: {
      type: 'VARCHAR(25)',
      notNull: true,
    },
  });

  pgm.sql(`INSERT INTO access(id, access)
  VALUES
  (1, 'user'),
  (2, 'admin'),
  (3, 'root')`);
};

exports.down = (pgm) => {
  pgm.dropTable('access');
};
