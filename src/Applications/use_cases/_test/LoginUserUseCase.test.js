const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');
const NewAuth = require('../../../Domains/authentications/entities/NewAuth');
const UserRepository = require('../../../Domains/users/UserRepository');
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager');
const PasswordHash = require('../../security/PasswordHash');
const LoginUserUseCase = require('../LoginUserUseCase');

describe('LoginUserUseCase', () => {
  it('should orchestrating the Login action correctly', async () => {
    // Arrange
    const useCasePayload = {
      username: 1234567890123456,
      password: 1234567890123456,
    };
    const expectedAuthentication = new NewAuth({
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
    });

    const mockUserRepository = new UserRepository();
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    const mockPasswordHash = new PasswordHash();

    // mocking

    mockUserRepository.getPasswordByKtp = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockPasswordHash.comparePassword = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.createAccessToken = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedAuthentication.accessToken));
    mockAuthenticationTokenManager.createRefreshToken = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedAuthentication.refreshToken));
    mockUserRepository.getNameByKtp = jest.fn()
      .mockImplementation(() => Promise.resolve('jhon'));
    mockAuthenticationRepository.addToken = jest.fn()
      .mockImplementation(() => Promise.resolve());

    // create use case instance
    const loginUserUseCase = new LoginUserUseCase({
      userRepository: mockUserRepository,
      authenticationRepository: mockAuthenticationRepository,
      authenticationTokenManager: mockAuthenticationTokenManager,
      passwordHash: mockPasswordHash,
    });

    // Action
    const actualAuthentication = await loginUserUseCase.execute(useCasePayload);
    // Assert
    expect(actualAuthentication).toEqual(expectedAuthentication);
    expect(mockUserRepository.getPasswordByKtp)
      .toBeCalledWith(1234567890123456);
    expect(mockPasswordHash.comparePassword)
      .toBeCalledWith(1234567890123456, 'encrypted_password');
    expect(mockUserRepository.getNameByKtp)
      .toBeCalledWith(1234567890123456);
    expect(mockAuthenticationTokenManager.createAccessToken)
      .toBeCalledWith({ ktp: 1234567890123456, name: 'jhon' });
    expect(mockAuthenticationTokenManager.createRefreshToken)
      .toBeCalledWith({ ktp: 1234567890123456, name: 'jhon' });
    expect(mockAuthenticationRepository.addToken)
      .toBeCalledWith(expectedAuthentication.refreshToken);
  });
});
