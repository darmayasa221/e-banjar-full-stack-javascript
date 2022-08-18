class UserRepository {
  async registerUser(payload) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async loginUser(payload) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async getUserByKtp(token) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async logoutUser(payload) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = UserRepository;
