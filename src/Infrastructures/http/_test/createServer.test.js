/* eslint-disable no-loss-of-precision */
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const container = require('../../container');
const pool = require('../../database/postgres/pool');
const createServer = require('../createServer');

describe('HTTP server', () => {
  afterAll(async () => {
    await pool.end();
  });
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });
  it('should response 404 when request unregistered route', async () => {
    // Arrange
    const server = await createServer({});
    // Action
    const response = await server.inject({
      method: 'GET',
      url: '/unregisteredRoute',
    });
    // Assert
    expect(response.statusCode).toEqual(404);
  });
  describe('when POST /users', () => {
    it('should response 201 and persisted user', async () => {
      // Arrange
      const requestPayload = {
        name: 'darma',
        ktp: 1234567890123456,
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(201);
      expect(responseJson.status).toEqual('success');
      expect(responseJson.message).toEqual('Terimakasih sudah melakukan pendaftaran di E-banjar');
    });
    it('should response 400 when request payload did not contain needed property', async () => {
      // Arrange
      const requestPayload = {
        name: 'darma',
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('registrasi gagal. mohon untuk melengkapi semua form');
    });
    it('sshould response 400 when request payload did not meet data type specification', async () => {
      // Arrange
      const requestPayload = {
        name: 'darma',
        ktp: '1234567890123456',
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('registrasi gagal. tipe data yang dimasukan tidak sesuai');
    });
    it('should respone 400 when ktp length is > 16', async () => {
      // Arrange
      const requestPayload = {
        name: 'darma',
        ktp: 12345678901234567,
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('registrasi gagal. jumlah ktp melebihi 16 digit');
    });
    it('should response 400 when ktp available', async () => {
      // Arrange
      await UsersTableTestHelper.registerUser({ ktp: 1234567890123456 });
      const requestPayload = {
        name: 'darma',
        ktp: 1234567890123456,
        current_address: 'alamat sekarang',
        old_address: 'alamat sebelumnya',
      };
      const server = await createServer(container);
      // Action
      const response = await server.inject({
        method: 'POST',
        url: '/users',
        payload: requestPayload,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(400);
      expect(responseJson.status).toEqual('fail');
      expect(responseJson.message).toEqual('registrasi gagal. ktp yang dimasukkan salah');
    });
  });
});
