describe('DashbordUserUseCase', () => {
  it('should orchestrating the Login action correctly', async () => {
    // Arrange
    const useCasePayload = {
      ktp: 1234567890123456,
      id_access: 'user',
    };
    const expectedValue = {
      access: true,
    };
  });
});
