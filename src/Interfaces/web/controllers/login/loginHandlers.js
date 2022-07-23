const { useDispatch, useSelector } = require('react-redux');
const loginUser = require('../../Models/userLogin');

const loginHandlers = () => {
  const dispatch = useDispatch();
  const stateLoginUser = useSelector((state) => state.loginUser);
  const {
    username,
    password,
  } = loginUser.actions;
  const onChangeUsername = (event) => {
    dispatch(username(event.target.value));
  };
  const onChangePassword = (event) => {
    dispatch(password(event.target.value));
  };
  const onHandlerLogin = (event) => {
    event.preventDefault();
    console.log(stateLoginUser);
  };

  return [
    onChangeUsername,
    onChangePassword,
    onHandlerLogin,
  ];
};

module.exports = loginHandlers;
