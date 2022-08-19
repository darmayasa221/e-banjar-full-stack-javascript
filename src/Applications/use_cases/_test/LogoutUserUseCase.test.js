const LogoutUserUseCase = require('../LogoutUserUseCase');
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');

describe('LogoutUserUseCase', () => {
  it('should orchestrating the logout action correctly', async () => {
    // Arrange
    const useCasePayload = {
      refreshToken: 'refreshToken',
    };
    const mockAuthenticationRepository = new AuthenticationRepository();
    // mocking
    mockAuthenticationRepository.checkAvailabilityToken = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationRepository.deleteToken = jest.fn()
      .mockImplementation(() => Promise.resolve());
    // create use case instance
    const logoutUserUseCase = new LogoutUserUseCase({
      authenticationRepository: mockAuthenticationRepository,
    });
    // Action
    await logoutUserUseCase.execute(useCasePayload);
    // Assert
    expect(mockAuthenticationRepository.checkAvailabilityToken)
      .toBeCalledWith(useCasePayload.refreshToken);
    expect(mockAuthenticationRepository.deleteToken)
      .toBeCalledWith(useCasePayload.refreshToken);
  });
});
