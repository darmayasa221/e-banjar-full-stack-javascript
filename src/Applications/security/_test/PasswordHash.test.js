const PasswordHash = require('../PasswordHash');

describe('PasswordHash Interface', () => {
  it('should throw error when invoked abstract behavior', async () => {
    // Arrange
    const passwordHash = new PasswordHash();
    // Acction and Assert
    await expect(passwordHash.hash('dumy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
    await expect(passwordHash.comparePassword('plain', 'encrypted')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
  });
});
