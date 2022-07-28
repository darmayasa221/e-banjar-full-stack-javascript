/* eslint-disable camelcase */
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
      await userRepositoryPostgres.registerUser({ ...userRegister, password: 'secret' });
      // Asert
      const users = await UsersTableTestHelper.findUserByKtp(1234567890123456);
      expect(users).toHaveLength(1);
    });
  });
  describe('getPasswordByKtp Function', () => {
    it('shuld throw InvariantError when ktp not fund', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.getPasswordByKtp(1234567890123456))
        .rejects.toThrowError(InvariantError);
    });
    it('should return password when ktp is found', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.registerUser({ ktp: 1234567890123456, password: 'seccret_password' });

      // Action and Asssert
      const password = await userRepositoryPostgres.getPasswordByKtp(1234567890123456);
      expect(password).toBe('seccret_password');
    });
  });
  describe('getNameByKtp Function', () => {
    it('shuld throw InvariantError when ktp not fund', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.getNameByKtp(1234567890123456))
        .rejects.toThrowError(InvariantError);
    });
    it('should return name when ktp is found', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.registerUser({ ktp: 1234567890123456, name: 'jhon' });

      // Action and Asssert
      const name = await userRepositoryPostgres.getNameByKtp(1234567890123456);
      expect(name).toBe('jhon');
    });
  });
  describe('getAccessByKtp function', () => {
    it('should persist to get access by ktp', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ ktp: 1234567890123456, id_access: '1' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action
      const id_access = await userRepositoryPostgres.getAccessByKtp(1234567890123456);
      // assert
      expect(id_access).toEqual('user');
    });
  });
});
