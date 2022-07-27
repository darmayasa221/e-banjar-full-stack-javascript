/* eslint-disable consistent-return */
/* eslint-disable no-useless-constructor */
const UserRepository = require('../../../Domains/users/UserRepository');
const UserRegister = require('../../../Domains/users/entities/UserRegister');
const UserLogin = require('../../../Domains/users/entities/UserLogin');

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

  userLogin(state, { dispatch, actionUserLogin }) {
    const userLogin = new UserLogin(state);
    dispatch(actionUserLogin({
      username: '',
      password: '',
    }));
    return userLogin;
  }

  responseServer(response, { dispatch, actionResponseServer }) {
    setTimeout(() => {
      dispatch(actionResponseServer({
        status: false,
        responseMessage: '',
        data: undefined,
      }));
    }, 3000);
    dispatch(actionResponseServer({
      status: response.status,
      responseMessage: response.message,
      data: !response.data ? undefined : response.data,
    }));
  }
}

module.exports = UserRepositoryRedux;
