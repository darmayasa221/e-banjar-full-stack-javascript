class LogoutUserUseCase {
  constructor({ userRepository, authenticationRepository, domainErrorTranslator }) {
    this._userRepository = userRepository;
    this._domainErrorTranslator = domainErrorTranslator;
    this._authenticationRepository = authenticationRepository;
  }

  async execute() {
    console.log('a');
  }
}

module.exports = LogoutUserUseCase;
