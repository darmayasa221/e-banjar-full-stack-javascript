const reducers = {
  actionAuthorization(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

module.exports = reducers;
