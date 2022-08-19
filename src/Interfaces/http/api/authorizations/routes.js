const routes = (handler) => ([
  {
    method: 'GET',
    path: '/authorizations',
    handler: handler.getAuthorizationHandler,
    options: {
      auth: 'authorizations_jwt',
    },
  },
]);

module.exports = routes;
