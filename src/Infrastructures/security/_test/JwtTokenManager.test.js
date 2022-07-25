const Jwt = require('@hapi/jwt');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const JwtTokenManager = require('../JwtTokenManager');

describe('JwtTokenManager', () => {
  describe('createAccessToken Function', () => {
    it('should create accessToken correctly', async () => {
      // Arrange
      const payload = {
        ktp: 1234567890123456,
        name: 'jhon',
      };
      const mockJwtToken = {
        generate: jest.fn().mockImplementation(() => 'mock_token'),
      };
      const jwtTokenManager = new JwtTokenManager(mockJwtToken);
      // action
      const accessToken = await jwtTokenManager.createAccessToken(payload);
      // Assert
      expect(mockJwtToken.generate).toBeCalledWith(payload, process.env.ACCESS_TOKEN_KEY);
      expect(accessToken).toEqual('mock_token');
    });
  });
  describe('refreshToken Function', () => {
    it('should create refreshToken correctly', async () => {
      // Arange
      const payload = {
        ktp: 1234567890123456,
        name: 'jhon',
      };
      const mockJwtToken = {
        generate: jest.fn().mockImplementation(() => 'mock_token'),
      };
      const jwtTokenManager = new JwtTokenManager(mockJwtToken);
      // Action
      const refreshToken = await jwtTokenManager.createRefreshToken(payload);
      // Action
      expect(mockJwtToken.generate).toBeCalledWith(payload, process.env.REFRESH_TOKEN_KEY);
      expect(refreshToken).toEqual('mock_token');
    });
  });
  describe('verifyRefreshToken Function', () => {
    it('should throw InvariantError when verification failed', async () => {
      // Arrange
      const jwtTokenManager = new JwtTokenManager(Jwt.token);
      const accessToken = await jwtTokenManager.createAccessToken({
        ktp: 1234567890123456,
        name: 'jhon',
      });
      // Action and Assert
      await expect(jwtTokenManager.verifyRefreshToken(accessToken))
        .rejects
        .toThrow(InvariantError);
    });
    it('should not throw InvariantError when refresh token token verified', async () => {
      // Arrange
      const jwtTokenManager = new JwtTokenManager(Jwt.token);
      const refreshToken = await jwtTokenManager.createRefreshToken({
        ktp: 1234567890123456,
        name: 'jhon',
      });
      // Action and Assert
      await expect(jwtTokenManager.verifyRefreshToken(refreshToken))
        .resolves
        .not.toThrow(InvariantError);
    });
  });
  describe('decodePayload Function', () => {
    it('should decode payload correctly', async () => {
      // Arrange
      const jwtTokenManager = new JwtTokenManager(Jwt.token);
      const accessToken = await jwtTokenManager.createAccessToken({
        ktp: 1234567890123456,
        name: 'jhon',
      });
      // Action
      const {
        ktp: expectedKtp,
        name: expectedName,
      } = await jwtTokenManager.decodePayload(accessToken);
      // Assert
      expect(expectedKtp).toEqual(1234567890123456);
      expect(expectedName).toEqual('jhon');
    });
  });
});
