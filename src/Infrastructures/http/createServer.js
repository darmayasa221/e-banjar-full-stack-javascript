const Hapi = require('@hapi/hapi');
const users = require('../../Interfaces/http/api/users');

const createServer = async (container) => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });
  await server.register([
    {
      plugin: users,
      options: {
        container,
      },
    },
  ]);
  return server;
};

module.exports = createServer;
