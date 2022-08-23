const { configureStore } = require('@reduxjs/toolkit');
const reducers = require('./reducers');

const store = configureStore({
  reducer: { ...reducers },
});

module.exports = store;
