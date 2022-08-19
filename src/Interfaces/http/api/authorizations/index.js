const AuthorizationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authorizations',
  register: async (server, { container }) => {
    const authorizationsHandler = new AuthorizationsHandler(container);
    server.route(routes(authorizationsHandler));
  },
};
