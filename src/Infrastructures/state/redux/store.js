const { configureStore } = require('@reduxjs/toolkit');

const store = (slice) => configureStore({
  reducer: { ...slice },
});

module.exports = store;
