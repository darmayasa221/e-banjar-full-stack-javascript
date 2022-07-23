const { createSlice } = require('@reduxjs/toolkit');
const responseServerInitialState = require('./initialState');
const reducers = require('./reducers');

const responseServer = createSlice({
  name: 'responseServer',
  initialState: responseServerInitialState,
  reducers,
});

module.exports = responseServer;
