class RegisterUserUseCase {
  constructor({ request, userRepository }) {
    this._request = request;
    this._userRepository = userRepository;
  }

  async execute(state) {
    const stateUserRegister = this._userRepository.register(state);
    await this._api.post(process.env.USER_REGISTER, stateUserRegister);
  }
}

module.exports = RegisterUserUseCase;
