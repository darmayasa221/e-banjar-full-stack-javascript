const Authorizationed = require('../../Domains/authorizations/entities/Authorizationed');

class AuthorizationUseCase {
  constructor({
    userRepository,
  }) {
    this._userRepository = userRepository;
  }

  async execute(useCasePayload) {
    const { credentialId, credentialKtp, credentialAccess } = useCasePayload;
    const name = await this._userRepository.verifyUser({ id: credentialId, ktp: credentialKtp });
    const id = await this._userRepository.verifyUserAccess(credentialAccess);
    return new Authorizationed({ name, id });
  }
}

module.exports = AuthorizationUseCase;
