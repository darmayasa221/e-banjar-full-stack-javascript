const reducers = {
  username(state, { payload }) {
    state.username = payload;
  },
  password(state, { payload }) {
    state.password = payload;
  },
  actionLoginUser(state, { payload }) {
    console.log(state);
  },
};

module.exports = reducers;
