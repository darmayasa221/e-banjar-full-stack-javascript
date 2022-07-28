/* eslint-disable camelcase */
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
    const name = await this._userRepository.getNameByKtp(username);
    const id_access = await this._userRepository.getAccessByKtp(username);
    await this._passwordHash.comparePassword(password, encryptedPassword);
    const accessToken = await this._authenticationTokenManager
      .createAccessToken({ ktp: username, name, id_access });
    const refreshToken = await this._authenticationTokenManager
      .createRefreshToken({ ktp: username, name, id_access });
    const newAuthentication = new NewAuth({
      accessToken,
      refreshToken,
    });
    await this._authenticationRepository.addToken(newAuthentication.refreshToken);
    return newAuthentication;
  }
}

module.exports = LoginUserUseCase;
