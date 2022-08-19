const AuthenticationsTableTestHelper = require('../../../../tests/AuthenticationsTableTestHelper');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const pool = require('../../database/postgres/pool');
const createServer = require('../createServer');

describe('/authorization endpoint', () => {
  afterAll(async () => {
    await pool.end();
  });
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
    await AuthenticationsTableTestHelper.cleanTable();
  });
  describe('when GET /authorization', () => {
    it('should response 201 and authorizationed', async () => {
      // Arrange
      const requestPayload = {
        username: 1234567890123456,
        password: 1234567890123456,
      };
      const server = await createServer(container);
      await server.inject({
        method: 'POST',
        url: '/users',
        payload: {
          name: 'darma',
          ktp: 1234567890123456,
          current_address: 'alamat sekarang',
          old_address: 'alamat sebelumnya',
        },
      });
      const responseLogin = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      const responseLoginJson = JSON.parse(responseLogin.payload);
      // action
      const response = await server.inject({
        method: 'GET',
        url: '/authorizations',
        headers: {
          Authorization: `Bearer ${responseLoginJson.data.accessToken}`,
        },
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.name).toBeDefined();
      expect(responseJson.data.idAccess).toBeDefined();
    });
  });
});
