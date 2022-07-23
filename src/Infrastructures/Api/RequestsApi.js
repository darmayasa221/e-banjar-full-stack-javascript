/* eslint-disable no-useless-constructor */
const Api = require('../../Applications/Api/Requests');

class RequestsApi extends Api {
  constructor() {
    super();
  }

  async post(url, state) {
    const responeJson = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(state),
    });
    const response = await responeJson.json();
    if (response.status === 'fail') {
      throw new Error(response.message);
    }
    return response;
  }
}

module.exports = RequestsApi;
