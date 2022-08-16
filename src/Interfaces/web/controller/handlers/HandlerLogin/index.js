const { useDispatch } = require('react-redux');
const loginUser = require('../../../model/loginUser');

const HandlerLogin = (payload) => {
  const dispatch = useDispatch();
  const { actionLoginUser, password, username } = loginUser.actions;
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(actionLoginUser());
  };
  const onChangeUsername = (event) => {
    dispatch(username(event.target.value));
  };
  const onChangePassword = (event) => {
    dispatch(password(event.target.value));
  };
  return { onSubmit, onChangeUsername, onChangePassword };
};

module.exports = HandlerLogin;
