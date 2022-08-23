const AuthenticationError = require('../AuthenticationError');

describe('AuthenticationError', () => {
  it('should create an error correctly', () => {
    const invariantError = new AuthenticationError('an error occurs');

    expect(invariantError.statusCode).toEqual(401);
    expect(invariantError.message).toEqual('an error occurs');
    expect(invariantError.name).toEqual('AuthenticationError');
  });
});
