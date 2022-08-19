/* eslint-disable camelcase */
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const AuthorizationError = require('../../../Commons/exceptions/AuthorizationError');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const NotFoundError = require('../../../Commons/exceptions/NotFoundError');
const RegisterUser = require('../../../Domains/users/entities/RegisterUser');
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
      const registerUser = new RegisterUser({
        name: 'darma',
        ktp: 1234567890123456,
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      });
      const fakeIdGenerator = () => '0001';
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, fakeIdGenerator);
      // Action
      await userRepositoryPostgres.registerUser({ ...registerUser, password: 'secret' });
      // Asert
      const users = await UsersTableTestHelper.findUserByKtp(1234567890123456);
      expect(users).toHaveLength(1);
    });
  });
  describe('getPasswordById Function', () => {
    it('shuld throw InvariantError when id not fund', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.getPasswordById('id-123'))
        .rejects.toThrowError(InvariantError);
    });
    it('should return password when id is found', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.registerUser({ id: 'id-123', password: 'seccret_password' });

      // Action and Asssert
      const password = await userRepositoryPostgres.getPasswordById('id-123');
      expect(password).toBe('seccret_password');
    });
  });
  describe('verifyUsername Function', () => {
    it('shuld throw InvariantError when username not fund', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.verifyUsername(1234567890123456))
        .rejects.toThrowError(InvariantError);
    });
    it('should return name, id and ktp when username is found', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.registerUser({ id: 'id-123', ktp: 1234567890123456, name: 'jhon' });
      // Action and Asssert
      const name = await userRepositoryPostgres.verifyUsername(1234567890123456);
      expect(name).toStrictEqual({
        id: 'id-123', ktp: '1234567890123456', name: 'jhon',
      });
    });
  });
  describe('getAccessById function', () => {
    it('should persist to get access by id', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ id: 'id-123', ktp: 1234567890123456, id_access: '1' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action
      const id_access = await userRepositoryPostgres.getAccessById('id-123');
      // assert
      expect(id_access).toEqual({ access: 'user' });
    });
  });
  describe('verifyUser Function', () => {
    it('should throw error when id not found ', async () => {
      // Arrange
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.verifyUser({ id: 'id-123' }))
        .rejects.toThrowError(NotFoundError);
    });
    it('should throw error when ktp is not match', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ id: 'id-123', ktp: 1234567890123456 });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      await expect(() => userRepositoryPostgres.verifyUser({ id: 'id-123', ktp: 1234567890123455 }))
        .rejects.toThrowError(AuthorizationError);
    });
    it('should persist to return name by id ', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ id: 'id-123', ktp: 1234567890123456, name: 'jhon' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      const name = await userRepositoryPostgres.verifyUser({ id: 'id-123', ktp: '1234567890123456' });
      expect(name).toEqual('jhon');
    });
  });
  describe('verifyUserAccess Function', () => {
    it('should persist to return id_access by accesss ', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ id: 'id-123', ktp: 1234567890123456, name: 'jhon' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      // Action and Assert
      const id = await userRepositoryPostgres.verifyUserAccess('user');
      expect(id).toEqual(1);
    });
  });
});
