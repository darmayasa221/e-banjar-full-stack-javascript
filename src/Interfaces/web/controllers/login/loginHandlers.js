const { useDispatch, useSelector } = require('react-redux');
const container = require('../../../../Infrastructures/container');
const errors = require('../../Models/error');
const responseServer = require('../../Models/responseServer');
const loginUser = require('../../Models/userLogin');

const loginHandlers = () => {
  const dispatch = useDispatch();
  const stateLoginUser = useSelector((state) => state.loginUser);
  const {
    username,
    password,
    actionUserLogin,
  } = loginUser.actions;
  const {
    actionError,
  } = errors.actions;
  const {
    actionResponseServer,
  } = responseServer.actions;
  const onChangeUsername = (event) => {
    dispatch(username(event.target.value));
  };
  const onChangePassword = (event) => {
    dispatch(password(event.target.value));
  };
  const onHandlerLogin = async (event) => {
    event.preventDefault();
    const loginUseUseCase = container.getInstance('LoginUserUseCase');
    await loginUseUseCase.execute(stateLoginUser, {
      dispatch, actionUserLogin, actionError, actionResponseServer,
    });
  };

  return [
    onChangeUsername,
    onChangePassword,
    onHandlerLogin,
  ];
};

module.exports = loginHandlers;
