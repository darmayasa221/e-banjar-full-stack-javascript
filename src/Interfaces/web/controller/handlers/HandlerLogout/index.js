const { useNavigate } = require('react-router-dom');
const container = require('../../../../../Infrastructures/container');
const HandlerNotification = require('../HandlerNotification');

const HandlerLogout = () => {
  const logoutUserUseCase = container.getInstance('LogoutUserUseCase');
  const navigate = useNavigate();
  const { dispatchNotification } = HandlerNotification();
  const logoutAction = async (event) => {
    event.preventDefault();
    const result = await logoutUserUseCase.execute();
    if (result.status === 'success') {
      navigate('/', { replace: true });
    }
    dispatchNotification(result);
  };
  return { logoutAction };
};

module.exports = HandlerLogout;
