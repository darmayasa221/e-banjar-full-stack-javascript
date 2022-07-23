/* eslint-disable no-param-reassign */
const reducers = {
  actionError(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

module.exports = reducers;
