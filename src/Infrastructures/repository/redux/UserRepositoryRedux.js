/* eslint-disable consistent-return */
/* eslint-disable no-useless-constructor */
const UserRepository = require('../../../Domains/users/UserRepository');
const UserRegister = require('../../../Domains/users/entities/UserRegister');

class UserRepositoryRedux extends UserRepository {
  constructor() {
    super();
  }

  userRegister(state, { dispatch, actionUserRegister }) {
    const userRegister = new UserRegister({ ...state, ktp: Number(state.ktp) });
    dispatch(actionUserRegister({
      name: '',
      ktp: 0,
      current_address: '',
      old_address: '',
    }));
    return userRegister;
  }

  responseServer(response, { dispatch, actionResponseServer }) {
    dispatch(actionResponseServer({
      status: response.status,
      responseMessage: response.message,
    }));
  }
}

module.exports = UserRepositoryRedux;
