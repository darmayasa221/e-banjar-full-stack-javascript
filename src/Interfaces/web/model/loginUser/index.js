const { createSlice } = require('@reduxjs/toolkit');
const loginUserInitialState = require('./initialState');
const reducers = require('./reducers');

const loginUser = createSlice({
  name: 'loginUser',
  initialState: loginUserInitialState,
  reducers,
});

module.exports = loginUser;
