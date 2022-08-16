const LoginUser = require('../LoginUser');

describe('LoginUser Entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
    };
    // Action and Assetr
    expect(() => new LoginUser(payload)).toThrowError('USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
      password: 'passsword',
    };
    // Action and Assetr
    expect(() => new LoginUser(payload)).toThrowError('USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should create LoginUser correctly', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
      password: 1234567890123456,
    };
    // Action
    const loginUser = new LoginUser(payload);
    // Assert
    expect(loginUser.username).toEqual(payload.username);
    expect(loginUser.password).toEqual(payload.password);
  });
});
