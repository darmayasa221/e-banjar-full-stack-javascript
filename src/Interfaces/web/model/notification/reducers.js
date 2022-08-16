const reducers = {
  actionNotification(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

module.exports = reducers;
