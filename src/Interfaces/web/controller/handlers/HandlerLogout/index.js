const { useNavigate } = require('react-router-dom');
const { useDispatch } = require('react-redux');
const LogoutUserUseCase = require('@Applications/use_case/LogoutUserUseCase');
const container = require('../../../../../Infrastructures/container');
const HandlerNotification = require('../HandlerNotification');
const authorization = require('../../../model/authorization');
const initialAuthorization = require('../../../model/authorization/initialState');

const HandlerLogout = () => {
  const disptach = useDispatch();
  const { actionAuthorization } = authorization.actions;
  const logoutUserUseCase = container.getInstance(LogoutUserUseCase.name);
  const navigate = useNavigate();
  const { dispatchNotification } = HandlerNotification();
  const logoutAction = async (event) => {
    event.preventDefault();
    const result = await logoutUserUseCase.execute();
    if (result.status === 'success') {
      disptach(actionAuthorization(initialAuthorization));
      navigate('/', { replace: true });
    }
    dispatchNotification(result);
  };
  return { logoutAction };
};

module.exports = HandlerLogout;
