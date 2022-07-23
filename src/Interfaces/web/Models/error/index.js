const { createSlice } = require('@reduxjs/toolkit');
const errorInitialState = require('./initialState');
const reducers = require('./reducers');

const errors = createSlice({
  name: 'users',
  initialState: errorInitialState,
  reducers,
});

module.exports = errors;
