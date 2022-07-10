const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const UserRegister = require('../../../Domains/users/entities/UserRegister');
const pool = require('../../database/postgres/pool');
const UserRepositoryPostgres = require('../UserRepositoryPostgres');

describe('UserRepositoryPostgres', () => {
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
  afterAll(async () => {
    await pool.end();
  });
  describe('verifyAvailableKtp Function', () => {
    it('should thorw InvariantError when KTP available', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ ktp: 1234567890123456 });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(userRepositoryPostgres.verifyAvailableKtp(1234567890123456))
        .rejects.toThrowError(InvariantError);
    });
    it('should not throw InvariantError when ktp not available', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(userRepositoryPostgres.verifyAvailableKtp(1234567890123456))
        .resolves.not.toThrowError(InvariantError);
    });
  });
  describe('registerUser function', () => {
    it('should persist register use', async () => {
      // Arrange
      const userRegister = new UserRegister({
        name: 'darma',
        ktp: 1234567890123456,
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      });
      const fakeIdGenerator = () => '0001';
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);
      // Action
      await userRepositoryPostgres.registerUser(userRegister);
      // Asert
      const users = await UsersTableTestHelper.findUserByKtp(1234567890123456);
      expect(users).toHaveLength(1);
    });
  });
});
