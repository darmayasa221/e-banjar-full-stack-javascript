const errors = require('../../../Interfaces/web/Models/error');
const responseServer = require('../../../Interfaces/web/Models/responseServer');
const loginUser = require('../../../Interfaces/web/Models/userLogin');
const userRegister = require('../../../Interfaces/web/Models/userRegister');

const slices = {
  userRegister: userRegister.reducer,
  errors: errors.reducer,
  responseServer: responseServer.reducer,
  loginUser: loginUser.reducer,
};

module.exports = slices;
