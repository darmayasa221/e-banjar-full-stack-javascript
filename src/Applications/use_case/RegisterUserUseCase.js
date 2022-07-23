class RegisterUserUseCase {
  constructor({ request, userRepository, errorRepository }) {
    this._request = request;
    this._userRepository = userRepository;
    this._errorRepository = errorRepository;
  }

  async execute(state, action) {
    try {
      const stateUserRegister = this._userRepository.userRegister(state, action);
      const response = await this._request.post('http://localhost:5000/users', stateUserRegister);
      this._userRepository.responseServer(response, action);
    } catch (error) {
      this._errorRepository.translateError(error, action);
    }
  }
}

module.exports = RegisterUserUseCase;
