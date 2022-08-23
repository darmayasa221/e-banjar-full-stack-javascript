const AuthorizationError = require('../AuthorizationError');

describe('AuthorizationError', () => {
  it('should create an error correctly', () => {
    const authorizationError = new AuthorizationError('an error');

    expect(authorizationError.statusCode).toEqual(403);
    expect(authorizationError.message).toEqual('an error');
    expect(authorizationError.name).toEqual('AuthorizationError');
  });
});
