class AuthenticationsHandler {
  constructor(container) {
    this._conatiner = container;
    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
    this.deleteAuthenticationHandler = this.deleteAuthenticationHandler.bind(this);
  }

  async postAuthenticationHandler({ payload }, h) {
    const loginUserUseCase = this._conatiner.getInstance('LoginUserUseCase');
    const data = await loginUserUseCase.execute(payload);
    const respone = h.response({
      status: 'success',
      message: 'Login Berhasil',
      data,
    });
    respone.code(201);
    return respone;
  }

  async deleteAuthenticationHandler({ payload }, h) {
    const logoutUserUseCase = this._conatiner.getInstance('LogoutUserUseCase');
    await logoutUserUseCase.execute(payload);
    return {
      status: 'success',
      message: 'Terimakasih telah menggunakan E-banjar',
    };
  }
}

module.exports = AuthenticationsHandler;
