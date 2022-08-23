const { useDispatch } = require('react-redux');
const registerUser = require('../../../model/registerUser');
const container = require('../../../../../Infrastructures/container').default;
const HandlerNotification = require('../HandlerNotification');
const registerUserInitialState = require('../../../model/registerUser/initialState');

const HandlerRegister = (payload) => {
  const registerUseCase = container.getInstance('RegisterUserUseCase');
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
    const result = await registerUseCase.execute(payload);
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
