/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.sql(`INSERT INTO users
  (id,name,password,ktp,current_address,old_address,created_at,updated_at)
  VALUES
  ('old_users','old_users','old_users','0','old_users','old_users','old_users','old_users')`);
  pgm.sql("UPDATE users SET id_access = '1' WHERE id_access IS NULL");
  pgm.addConstraint('users', 'fk_users.id_access_access.id', 'FOREIGN KEY(id_access) REFERENCES access(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('users', 'fk_users.id_access_access.id');
  pgm.sql("UPDATE users SET id_access = NULL WHERE id_access = 'old_notes'");
  pgm.sql("DELETE FROM users WHERE id = 'old_notes'");
};
