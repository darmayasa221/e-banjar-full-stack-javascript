const AuthorizationsRepository = require('../AuthorizationsRepository');

describe('AuthorizationsRepository', () => {
  it('should throw error when invoked abstract behavior', async () => {
    const authorizationsRepository = new AuthorizationsRepository();

    await expect(authorizationsRepository.verifyIdAccess(''))
      .rejects.toThrowError('AUTHORIZATIONS_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(authorizationsRepository.accessUser({}))
      .rejects.toThrowError('AUTHORIZATIONS_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(authorizationsRepository.accessAdmin({}))
      .rejects.toThrowError('AUTHORIZATIONS_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
