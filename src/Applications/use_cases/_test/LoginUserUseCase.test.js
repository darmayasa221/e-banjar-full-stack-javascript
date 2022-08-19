const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');
const NewAuth = require('../../../Domains/authentications/entities/NewAuth');
const UserRepository = require('../../../Domains/users/UserRepository');
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager');
const PasswordHash = require('../../security/PasswordHash');
const LoginUserUseCase = require('../LoginUserUseCase');
const LoginUser = require('../../../Domains/users/entities/LoginUser');

describe('LoginUserUseCase', () => {
  it('should orchestrating the Login action correctly', async () => {
    // Arrange
    const useCasePayload = new LoginUser({
      username: 1234567890123456,
      password: 1234567890123456,
    });
    const expectedAuthentication = new NewAuth({
      name: 'jhon',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
    });

    const mockUserRepository = new UserRepository();
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    const mockPasswordHash = new PasswordHash();
    const idMock = 'id-mock123';
    const ktpMock = '1234567890123456';
    const accessMock = 'user';
    // mocking

    mockUserRepository.verifyUsername = jest.fn()
      .mockImplementation(() => Promise.resolve({
        id: idMock,
        name: expectedAuthentication.name,
        ktp: ktpMock,
      }));
    mockUserRepository.getPasswordById = jest.fn()
      .mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUserRepository.getAccessById = jest.fn()
      .mockImplementation(() => Promise.resolve({ access: accessMock }));
    mockPasswordHash.comparePassword = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.createAccessToken = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedAuthentication.accessToken));
    mockAuthenticationTokenManager.createRefreshToken = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedAuthentication.refreshToken));
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
    expect(mockUserRepository.verifyUsername)
      .toBeCalledWith(useCasePayload.username);
    expect(mockUserRepository.getPasswordById)
      .toBeCalledWith(idMock);
    expect(mockUserRepository.getAccessById)
      .toBeCalledWith(idMock);
    expect(mockPasswordHash.comparePassword)
      .toBeCalledWith(1234567890123456, 'encrypted_password');
    expect(mockAuthenticationTokenManager.createAccessToken)
      .toBeCalledWith({
        id: idMock, ktp: ktpMock, name: 'jhon', access: accessMock,
      });
    expect(mockAuthenticationTokenManager.createRefreshToken)
      .toBeCalledWith({
        id: idMock, ktp: ktpMock, name: 'jhon', access: accessMock,
      });
    expect(mockAuthenticationRepository.addToken)
      .toBeCalledWith(expectedAuthentication.refreshToken);
  });
});
