/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.addColumn('users', {
    id_access: {
      type: 'VARCHAR(50)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('users', 'id_access');
};
