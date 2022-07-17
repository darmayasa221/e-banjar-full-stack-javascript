/* eslint-disable no-useless-constructor */
const Api = require('../../Applications/Api/Requests');

class RequestsApi extends Api {
  constructor() {
    super();
  }

  async post(url, state) {
    const response = await fetch(process.env.REGISTER_USER, {
      method: 'POST',
      body: JSON.parse(state),
    });
  }
}

module.exports = RequestsApi;
