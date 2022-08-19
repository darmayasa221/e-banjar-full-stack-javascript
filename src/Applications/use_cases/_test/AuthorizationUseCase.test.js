const AuthorizationUseCase = require('../AuthorizationUseCase');
const Authorizationed = require('../../../Domains/authorizations/entities/Authorizationed');
const UserRepository = require('../../../Domains/users/UserRepository');

describe('AuthorizationUseCase', () => {
  it('should orchestrating the authorization action correctly', async () => {
    // Arrange
    const useCasePayload = {
      credentialId: 'id-123',
      credentialKtp: '1234567890123456',
      credentialAccess: 'user',
    };
    const excpectedAuthorizationed = new Authorizationed({
      name: 'jhon',
      id: 1,
    });
    const mockUserRepository = new UserRepository();
    // mocking
    mockUserRepository.verifyUser = jest.fn()
      .mockImplementation(() => Promise.resolve('jhon'));
    mockUserRepository.verifyUserAccess = jest.fn()
      .mockImplementation(() => Promise.resolve(1));
    // create use case instance
    const authorizationUseCase = new AuthorizationUseCase({
      userRepository: mockUserRepository,
    });
    // Action
    const authorizationed = await authorizationUseCase.execute(useCasePayload);
    // Assert
    expect(authorizationed).toStrictEqual(excpectedAuthorizationed);
    expect(mockUserRepository.verifyUser)
      .toBeCalledWith({ id: useCasePayload.credentialId, ktp: useCasePayload.credentialKtp });
    expect(mockUserRepository.verifyUserAccess)
      .toBeCalledWith(useCasePayload.credentialAccess);
  });
});
