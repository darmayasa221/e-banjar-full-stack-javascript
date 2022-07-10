const UserRegister = require('../../../Domains/users/entities/UserRegister');
const UserRepository = require('../../../Domains/users/UserRepository');
const PasswordHash = require('../../security/PasswordHash');
const RegisterUserUseCase = require('../RegisterUserUseCase');

describe('RegisterUserUseCase', () => {
  it('should orchestrating the add user action correctly', async () => {
    // Arrange
    const useCasePayload = new UserRegister({
      name: 'darma',
      ktp: 1234567890123456,
      current_address: 'alamat sekarang',
      old_address: 'alamat sebelumnya',
    });
    /** creating dependency of use case */
    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();
    /** mocking needed function */
    mockUserRepository.verifyAvailableKtp = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockPasswordHash.registerUser = jest.fn()
      .mockImplementation(() => Promise.resolve());
    const registerUserUseCase = new RegisterUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
    });
    // Action
    await registerUserUseCase.execute(useCasePayload);
    // Assert
    expect(mockUserRepository.verifyAvailableKtp).toBeCalledWith(useCasePayload.ktp);
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.ktp);
    expect(mockUserRepository.registerUser).toBeCalled({
      name: 'darma',
      password: 'encrypted_password',
      ktp: 1234567890123456,
      current_address: 'alamat sekarang',
      old_address: 'alamat sebelumnya',
    });
  });
});
