const UserLogin = require('../UserLogin');

describe('UserLogin Entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
    };
    // Action and Assetr
    expect(() => new UserLogin(payload)).toThrowError('USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
      password: 'passsword',
    };
    // Action and Assetr
    expect(() => new UserLogin(payload)).toThrowError('USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should create UserLogin correctly', () => {
    // Arrange
    const payload = {
      username: 1234567890123456,
      password: 1234567890123456,
    };
    // Action
    const userLogin = new UserLogin(payload);
    // Assert
    expect(userLogin.username).toEqual(payload.username);
    expect(userLogin.password).toEqual(payload.password);
  });
});
