class LoginUserUseCase {
  constructor({ request, errorRepository, userRepository }) {
    this._request = request;
    this._errorRepository = errorRepository;
    this._userRepository = userRepository;
  }

  async execute(state, action) {
    const newState = this._verifyState(state);
    try {
      const stateUserLogin = this._userRepository.userLogin(newState, action);
      const response = await this._request.post('http://localhost:5000/authentications', stateUserLogin);
      this._userRepository.responseServer(response, action);
    } catch (error) {
      this._errorRepository.translateError(error, action);
    }
  }

  _verifyState({ username, password }) {
    const newState = {
      username: Number.isNaN(Number(username)) ? 'text' : Number(username),
      password: Number.isNaN(Number(username)) ? 'text' : Number(password),
    };
    return newState;
  }
}

module.exports = LoginUserUseCase;
