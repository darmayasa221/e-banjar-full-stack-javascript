const container = require('@Infrastructures/container');
const { useDispatch } = require('react-redux');
const { useNavigate } = require('react-router-dom');
const authorization = require('../../../model/authorization');
const initialAuthorization = require('../../../model/authorization/initialState');
const HandlerNotification = require('../HandlerNotification');

const HandlerAuthorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actionAuthorization } = authorization.actions;
  const { dispatchNotification } = HandlerNotification();
  const authorizationsUseCase = container.getInstance('AuthorizationUseCase');
  const dispatchAuthorization = async () => {
    const data = await authorizationsUseCase.execute();
    if (data.status === 'success') {
      dispatch(actionAuthorization({ authed: true, status: data.status, ...data.data }));
      dispatchNotification(data);
    } else {
      dispatchNotification(data);
      dispatch(actionAuthorization(initialAuthorization));
      navigate('/', { replace: true });
    }
  };
  return { dispatchAuthorization };
};

module.exports = HandlerAuthorization;
