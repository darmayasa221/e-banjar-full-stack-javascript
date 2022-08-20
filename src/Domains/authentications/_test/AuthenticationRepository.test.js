const AuthenticationRepository = require('../AuthenticationRepository');

describe('AuthenticationRepository', () => {
  it('should trow error when invoked unimplemented method', () => {
    // Arrange
    const authenticationRepository = new AuthenticationRepository();
    // Acction and Assert
    expect(authenticationRepository.addToken('')).toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    expect(authenticationRepository.checkAvailabilityToken('')).toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    expect(authenticationRepository.deleteToken('')).toThrowError('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
