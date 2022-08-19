class AuthorizationsHandler {
  constructor(container) {
    this._conatiner = container;
    this.getAuthorizationHandler = this.getAuthorizationHandler.bind(this);
  }

  async getAuthorizationHandler({ auth }, h) {
    const authorizationUseCase = this._conatiner.getInstance('AuthorizationUseCase');
    const { id: credentialId, ktp: credentialKtp, access: credentialAccess } = auth.credentials;
    const data = await authorizationUseCase.execute({
      credentialId, credentialKtp, credentialAccess,
    });
    const respone = h.response({
      status: 'success',
      data,
    });
    respone.code(201);
    return respone;
  }
}

module.exports = AuthorizationsHandler;
