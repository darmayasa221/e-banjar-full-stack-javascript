const { useDispatch } = require('react-redux');
const { useNavigate } = require('react-router-dom');
const container = require('Infrastructures/container');
const loginUser = require('../../../model/loginUser');
const HandlerNotification = require('../HandlerNotification');
const loginUserInitialState = require('../../../model/loginUser/initialState');

const HandlerLogin = (payload) => {
  const { loginUserUseCase } = container;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actionLoginUser, password, username } = loginUser.actions;
  const { dispatchNotification } = HandlerNotification();
  const onChangeUsername = (event) => {
    dispatch(username(event.target.value));
  };
  const onChangePassword = (event) => {
    dispatch(password(event.target.value));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await loginUserUseCase.execute(payload);
    if (result.status === 'success') {
      dispatch(actionLoginUser(loginUserInitialState));
      navigate('/dashboard', { replace: true });
    }
    dispatch(actionLoginUser(payload));
    dispatchNotification(result);
  };
  return { onSubmit, onChangeUsername, onChangePassword };
};

module.exports = HandlerLogin;
