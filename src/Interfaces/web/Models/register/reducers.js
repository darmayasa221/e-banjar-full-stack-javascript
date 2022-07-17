/* eslint-disable no-param-reassign */

const reducers = {
  inputName(state, { payload }) {
    state.name = payload;
  },
  inputKtp(state, { payload }) {
    state.ktp = payload;
  },
  inputCurrentAddress(state, { payload }) {
    state.current_address = payload;
  },
  inputOldAddress(state, { payload }) {
    state.old_address = payload;
  },
  async handlerRegister(state, { payload }) {
    const registerUserUseCase = payload.getInstance('RegisterUserUseCase');
    await registerUserUseCase.execute(state);
  },
};

module.exports = reducers;
