const loginUser = require('../../Interfaces/web/model/loginUser');
const registerUser = require('../../Interfaces/web/model/registerUser');
const notification = require('../../Interfaces/web/model/notification');

const reducers = {
  loginUser: loginUser.reducer,
  registerUser: registerUser.reducer,
  notification: notification.reducer,
};

module.exports = reducers;
