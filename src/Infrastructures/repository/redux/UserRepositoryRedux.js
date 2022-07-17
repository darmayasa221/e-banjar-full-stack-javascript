/* eslint-disable no-useless-constructor */
const UserRepository = require('../../../Domains/users/UserRepository');
const UserRegister = require('../../../Domains/users/entities/UserRegister');

class UserRepositoryRedux extends UserRepository {
  constructor() {
    super();
  }

  registerUser(state) {
    try {
      const userRegister = new UserRegister(state);
      console.log(userRegister);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserRepositoryRedux;
