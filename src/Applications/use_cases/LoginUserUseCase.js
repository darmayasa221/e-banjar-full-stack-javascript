const NewAuth = require('../../Domains/authentications/entities/NewAuth');
const LoginUser = require('../../Domains/users/entities/LoginUser');

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

  async execute(useCasePayload) {
    const { username, password } = new LoginUser(useCasePayload);
    const { id, name, ktp } = await this._userRepository.verifyUsername(username);
    const encryptedPassword = await this._userRepository.getPasswordById(id);
    const { access } = await this._userRepository.getAccessById(id);
    await this._passwordHash.comparePassword(password, encryptedPassword);
    const accessToken = await this._authenticationTokenManager
      .createAccessToken({
        id, ktp, name, access,
      });
    const refreshToken = await this._authenticationTokenManager
      .createRefreshToken({
        id, ktp, name, access,
      });
    const newAuthentication = new NewAuth({
      name,
      accessToken,
      refreshToken,
    });
    await this._authenticationRepository.addToken(newAuthentication.refreshToken);
    return newAuthentication;
  }
}

module.exports = LoginUserUseCase;
