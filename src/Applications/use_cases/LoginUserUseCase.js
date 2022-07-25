
/* eslint-disable no-underscore-dangle */
const NewAuth = require('../../Domains/authentications/entities/NewAuth');
const UserLogin = require('../../Domains/users/entities/UserLogin');

class LoginUserUseCase {
  constructor({
    userRepository,
    authenticationRepository,
    authenticationTokenManager,
    passwordHash,
  }) {
    this._userRepository = userRepository;
    this._authenticationRepository = authenticationRepository;
    this._authenticationTokenManager = authenticationTokenManager;
    this._passwordHash = passwordHash;
  }

  async execute(payload) {
    const { username, password } = new UserLogin(payload);
    const encryptedPassword = await this._userRepository.getPasswordByKtp(username);
    await this._passwordHash.comparePassword(password, encryptedPassword);
    const name = await this._userRepository.getNameByKtp(username);
    const accessToken = await this._authenticationTokenManager
      .createAccessToken({ ktp: username, name });
    const refreshToken = await this._authenticationTokenManager
      .createRefreshToken({ ktp: username, name });
    const newAuthentication = new NewAuth({
      accessToken,
      refreshToken,
    });
    await this._authenticationRepository.addToken(newAuthentication.refreshToken);
    return newAuthentication;
  }
}

module.exports = LoginUserUseCase;
