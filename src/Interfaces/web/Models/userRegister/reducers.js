const reducers = {
  name(state, { payload }) {
    state.name = payload;
  },
  ktp(state, { payload }) {
    state.ktp = payload;
  },
  currentAddress(state, { payload }) {
    state.current_address = payload;
  },
  oldAddress(state, { payload }) {
    state.old_address = payload;
  },
  actionUserRegister(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

module.exports = reducers;
