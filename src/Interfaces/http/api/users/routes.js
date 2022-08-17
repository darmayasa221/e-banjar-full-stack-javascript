const routes = (handler) => ([
  {
    method: 'POST',
    path: '/users',
    handler: handler.registerUserHandler,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUserByKtpHandler,
    options: {
      auth: 'users_jwt',
    },
  },
]);

module.exports = routes;
