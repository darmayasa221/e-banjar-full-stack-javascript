const reducers = {
  username(state, { payload }) {
    state.username = payload;
  },
  password(state, { payload }) {
    state.password = payload;
  },
  actionUserLogin(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

module.exports = reducers;
