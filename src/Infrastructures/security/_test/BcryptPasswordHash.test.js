const bcrypt = require('bcrypt');
const AuthenticationError = require('../../../Commons/exceptions/AuthenticationError');
const BcryptPasswordHash = require('../BcryptPasswordHash');

describe('BcyptPasswordHash', () => {
  describe('hash function', () => {
    it('should encrypt password correctly', async () => {
      // Arrange
      const spyHash = jest.spyOn(bcrypt, 'hash');
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);
      // Action
      const encryptedPassword = await bcryptPasswordHash.hash('plain_password');
      // Assert
      expect(typeof encryptedPassword).toEqual('string');
      expect(encryptedPassword).not.toEqual('plain_password');
      expect(spyHash).toBeCalledWith('plain_password', 10);
    });
  });
  describe('comparePassword function', () => {
    it('shoul throw AuthenticaationError if password not match', async () => {
      // Arrange
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);
      // Action and Assert
      await expect(bcryptPasswordHash.comparePassword('plain', 'encrypted'))
        .rejects
        .toThrow(AuthenticationError);
    });
    it('should not throw AuthenticationError when password match', async () => {
      // Arrange
      const bcryptPasswordHash = new BcryptPasswordHash(bcrypt);
      const plainPassword = 'password';
      const encyptedPassword = await bcryptPasswordHash.hash(plainPassword);
      // Action and Assert
      await expect(bcryptPasswordHash.comparePassword(plainPassword, encyptedPassword))
        .resolves.not.toThrow(AuthenticationError);
    });
  });
});
