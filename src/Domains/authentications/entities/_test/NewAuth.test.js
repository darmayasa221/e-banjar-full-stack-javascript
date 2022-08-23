const NewAuth = require('../NewAuth');

describe('NewAuth Entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      accessToken: 'accessToken',
    };
    // Action and Assert
    expect(() => new NewAuth(payload)).toThrowError('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      name: 'jhon',
      accessToken: 'accessToken',
      refreshToken: 134,
    };
    // Action and Assert
    expect(() => new NewAuth(payload)).toThrowError('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should create NewAuth correctly', () => {
    // Arrange
    const payload = {
      name: 'jhon',
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    };
    // action
    const newAuth = new NewAuth(payload);
    // Asert
    expect(newAuth.name).toEqual(payload.name);
    expect(newAuth.accessToken).toEqual(payload.accessToken);
    expect(newAuth.refreshToken).toEqual(payload.refreshToken);
  });
});
