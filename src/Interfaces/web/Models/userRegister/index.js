const { createSlice } = require('@reduxjs/toolkit');
const userRegisterInitialState = require('./initialState');
const reducers = require('./reducers');

const userRegister = createSlice({
  name: 'users',
  initialState: userRegisterInitialState,
  reducers,
});

module.exports = userRegister;
