const { useDispatch } = require('react-redux');
const container = require('Infrastructures/container');
const registerUser = require('../../../model/registerUser');
const HandlerNotification = require('../HandlerNotification');
const registerUserInitialState = require('../../../model/registerUser/initialState');

const HandlerRegister = (payload) => {
  const { registerUserUseCase } = container;
  const { dispatchNotification } = HandlerNotification();
  const dispatch = useDispatch();
  const {
    name, ktp, currentAddress, oldAddress, actionRegisterUser,
  } = registerUser.actions;

  const onChangeName = (event) => {
    dispatch(name(event.target.value));
  };
  const onChangeKtp = (event) => {
    dispatch(ktp(event.target.value));
  };
  const onChangeCurrentAddress = (event) => {
    dispatch(currentAddress(event.target.value));
  };
  const onChangeOldAddress = (event) => {
    dispatch(oldAddress(event.target.value));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await registerUserUseCase.execute(payload);
    if (result.status === 'success') {
      dispatch(actionRegisterUser(registerUserInitialState));
    } else {
      dispatch(actionRegisterUser(payload));
    }
    dispatchNotification(result);
  };
  return {
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onSubmit,
  };
};

module.exports = HandlerRegister;
