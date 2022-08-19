const AuthenticationsTableTestHelper = require('../../../../tests/AuthenticationsTableTestHelper');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const pool = require('../../database/postgres/pool');
const createServer = require('../createServer');

describe('/authentications endpoint', () => {
  afterAll(async () => {
    await pool.end();
  });
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
    await AuthenticationsTableTestHelper.cleanTable();
  });
  describe('when POST /authentications', () => {
    it('should response 201 and new authentication', async () => {
      // Arrange
      const requestPayload = {
        username: 1234567890123456,
        password: 1234567890123456,
      };
      const server = await createServer(container);
      // add user
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
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.data.name).toBeDefined();
      expect(responseJson.data.accessToken).toBeDefined();
      expect(responseJson.data.refreshToken).toBeDefined();
    });
    it('should response 400 if username not found', async () => {
      // Arrange
      const requestPayload = {
        username: 1234567890123456,
        password: 1234567890123456,
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('login gagal, pengguna tidak ditemukan');
    });
    it('should response 401 if password wrong', async () => {
      // Arrange
      const requestPayload = {
        username: 1234567890123456,
        password: 1234567890123455,
      };
      const server = await createServer(container);
      // add user
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
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(401);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('massukkan password dengan benar');
    });
    it('should response 400 if login payload did not contain needed property', async () => {
      // Arrange
      const requestPayload = {
        username: 1234567890123456,
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('username dan password tidak boleh kosong');
    });
    it('should response 400 if login payload did not meet data type specification', async () => {
      // Arrange
      const requestPayload = {
        username: '1234567890123456',
        password: 1234567890123455,
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/authentications',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('masukkan username dan password dengan data yang benar');
    });
  });
  describe('when DELETE /authentications', () => {
    it('should response 200 if refresh token valid', async () => {
      // Arrange
      const server = await createServer(container);
      const refreshToken = 'refresh_token';
      await AuthenticationsTableTestHelper.addToken(refreshToken);

      // Action
      const response = await server.inject({
        method: 'DELETE',
        url: '/authentications',
        payload: {
          refreshToken,
        },
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.message).toEqual('Terimakasih telah menggunakan E-banjar');
    });

    it('should response 400 if refresh token not registered in database', async () => {
      // Arrange
      const server = await createServer(container);
      const refreshToken = 'refresh_token';

      // Action
      const response = await server.inject({
        method: 'DELETE',
        url: '/authentications',
        payload: {
          refreshToken,
        },
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('refresh token tidak ditemukan di database');
    });

    it('should response 400 if payload not contain refresh token', async () => {
      // Arrange
      const server = await createServer(container);

      // Action
      const response = await server.inject({
        method: 'DELETE',
        url: '/authentications',
        payload: {},
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('harus mengirimkan token refresh');
    });

    it('should response 400 if refresh token not string', async () => {
      // Arrange
      const server = await createServer(container);

      // Action
      const response = await server.inject({
        method: 'DELETE',
        url: '/authentications',
        payload: {
          refreshToken: 123,
        },
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('refresh token tidak sesuai');
    });
  });
});
