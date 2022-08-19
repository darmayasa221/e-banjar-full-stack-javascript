class UsersHandler {
  constructor(container) {
    this._container = container;
    this.registerUserHandler = this.registerUserHandler.bind(this);
  }

  async registerUserHandler({ payload }, h) {
    const registerUserUseCase = this._container.getInstance('RegisterUserUseCase');
    await registerUserUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      message: 'Terimakasih sudah melakukan pendaftaran di E-banjar',
    });
    response.code(201);
    return response;
  }
}

module.exports = UsersHandler;
