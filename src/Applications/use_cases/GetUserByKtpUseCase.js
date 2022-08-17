/* eslint-disable camelcase */
class GetUserByKtpUseCase {
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
    const id_access = this._userRepository.getAccessByKtp(payload);
    const access = this._userRepository.verifyAccessUser(id_access);
    return this._userRepository.getUserByKtp(payload, access);
  }
}
