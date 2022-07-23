/* eslint-disable no-useless-constructor */
const ClientError = require('../../../Commons/exceptions/ClientError');
const ErrorRpository = require('../../../Domains/users/ErrorRepository');

class ErrorRepositoryImplement extends ErrorRpository {
  constructor(domainErrorTranslator) {
    super();
    this._domainErrorTranslator = domainErrorTranslator;
  }

  translateError(error, { dispatch, actionError }) {
    const translatedError = this._domainErrorTranslator.translate(error);
    if (translatedError instanceof ClientError) {
      setTimeout(() => {
        dispatch(actionError({
          error: false,
          errorMessage: '',
        }));
      }, 3000);
      dispatch(actionError({
        error: true,
        errorMessage: translatedError.message,
      }));
      return;
    }
    setTimeout(() => {
      dispatch(actionError({
        error: false,
        errorMessage: '',
      }));
    }, 3000);
    dispatch(actionError({
      error: true,
      errorMessage: error.message,
    }));
  }
}
module.exports = ErrorRepositoryImplement;
