require('dotenv').config();
const container = require('./Infrastructures/container');
const createServer = require('./Infrastructures/http/createServer');

(async () => {
  const server = await createServer(container);
  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server start at ${server.info.uri}`);
})();
