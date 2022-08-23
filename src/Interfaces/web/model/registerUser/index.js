const { createSlice } = require('@reduxjs/toolkit');
const userRegisterInitialState = require('./initialState');
const reducers = require('./reducers');

const registerUser = createSlice({
  name: 'registerUser',
  initialState: userRegisterInitialState,
  reducers,
});

module.exports = registerUser;
