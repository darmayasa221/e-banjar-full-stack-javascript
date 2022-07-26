class AuthenticationsHandler {
  constructor(container) {
    this._conatiner = container;
    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
  }

  async postAuthenticationHandler({ payload }, h) {
    const loginUserUseCase = this._conatiner.getInstance('LoginUserUseCase');
    const data = await loginUserUseCase.execute(payload);
    const respone = h.response({
      status: 'success',
      data,
    });
    respone.code(201);
    return respone;
  }
}

module.exports = AuthenticationsHandler;
