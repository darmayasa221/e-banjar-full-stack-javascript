const Authorizationed = require('../Authorizationed');

describe('Authorizationed Entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      name: 'jhon',
    };
    // Action and Assetr
    expect(() => new Authorizationed(payload)).toThrowError('AUTHORIZATIONED.NOT_CONTAIN_NEEDED_PROPERTY');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      name: 'jhon',
      id: '13',
    };
    // Action and Assetr
    expect(() => new Authorizationed(payload)).toThrowError('AUTHORIZATIONED.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should create Authorizationed correctly', () => {
    // Arrange
    const payload = {
      name: 'jhon',
      id: 1,
    };
    // Action
    const authorizationed = new Authorizationed(payload);
    // Assert
    expect(authorizationed.name).toEqual(payload.name);
    expect(authorizationed.idAccess).toEqual(payload.id);
  });
});
