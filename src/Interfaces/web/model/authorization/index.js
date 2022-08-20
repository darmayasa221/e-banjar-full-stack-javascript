const { createSlice } = require('@reduxjs/toolkit');
const authorizationInitialState = require('./initialState');
const reducers = require('./reducers');

const authorization = createSlice({
  name: 'authorization',
  initialState: authorizationInitialState,
  reducers,
});

module.exports = authorization;
