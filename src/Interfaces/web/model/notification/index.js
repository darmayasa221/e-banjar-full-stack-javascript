const { createSlice } = require('@reduxjs/toolkit');
const notificationInitialState = require('./initialState');
const reducers = require('./reducers');

const notification = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers,
});

module.exports = notification;
