/* eslint-disable camelcase */
const UserRegister = require('../UserRegister');

describe('UserRegister', () => {
  it('should throw error when payload did not contain needed', () => {
    // Arrange
    const payload = {
      name: 'darma',
      ktp: 1234567890123456,
      current_address: 'alamat sekarang',
    };
    // Action and Assert
    expect(() => new UserRegister(payload)).toThrowError('USER_REGISTER.NOT_CONTAIN_NEEDED_PROPERT');
  });
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      name: 'darma',
      ktp: '1234567890123456',
      current_address: 'alamat sekarang',
      old_address: 'alamat sebelumnya',
    };
    // Action and Assert
    expect(() => new UserRegister(payload)).toThrowError('USER_REGISTER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should throw error when ktp of length > 16', () => {
    // Arrange
    const payload = {
      name: 'darma',
      ktp: 1234567890123456,
      current_address: 'alamat sekarang',
      old_address: 'alamat sebelumnya',
    };
    // Action and Assert
    expect(() => new UserRegister(payload)).toThrowError('USER_REGISTER.KTP_OF_LENGTH_GREETER_THEN_16');
  });
  it('should crate user register corretly', () => {
    // Arrange
    const payload = {
      name: 'darma',
      ktp: 1234567890123456,
      current_address: 'alamat sekarang',
      old_address: 'alamat sebelumnya',
    };
    // Action
    const {
      name,
      ktp,
      current_address,
      old_address,
    } = new UserRegister(payload);
    // Assert
    expect(name).toEqual(payload.name);
    expect(ktp).toEqual(payload.ktp);
    expect(current_address).toEqual(payload.current_address);
    expect(old_address).toEqual(payload.old_address);
  });
});
