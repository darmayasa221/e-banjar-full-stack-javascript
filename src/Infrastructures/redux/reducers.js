const loginUser = require('@Interfaces/web/model/loginUser');
const registerUser = require('@Interfaces/web/model/registerUser');
const notification = require('@Interfaces/web/model/notification');
const authorization = require('@Interfaces/web/model/authorization');

const reducers = {
  authorization: authorization.reducer,
  loginUser: loginUser.reducer,
  registerUser: registerUser.reducer,
  notification: notification.reducer,
};

module.exports = reducers;
