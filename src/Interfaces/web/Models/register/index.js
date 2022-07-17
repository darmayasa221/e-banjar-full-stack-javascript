const { createSlice } = require('@reduxjs/toolkit');
const registerUserInitialState = require('./initialState');
const reducers = require('./reducers');

const register = createSlice({
  name: 'user',
  initialState: registerUserInitialState,
  reducers,
});

module.exports = register;
