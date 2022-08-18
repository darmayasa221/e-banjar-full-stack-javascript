const container = require('../../../../../Infrastructures/container');

const HandlerAuthorization = () => {
  const getUserByKtpUseCase = container.getInstance('GetUserByKtpUseCase');
  const authorization = async () => {
    const data = await getUserByKtpUseCase.execute();
    return data;
  };
  return { authorization };
};

module.exports = HandlerAuthorization;
