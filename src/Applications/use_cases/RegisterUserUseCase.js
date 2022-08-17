const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class RegisterUserUseCase {
  constructor({ userRepository, passwordHash }) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
  }

  async execute(payload) {
    const user = new RegisterUser(payload);
    await this._userRepository.verifyAvailableKtp(user.ktp);
    user.password = await this._passwordHash.hash(user.ktp);
    await this._userRepository.registerUser(user);
  }
}

module.exports = RegisterUserUseCase;
