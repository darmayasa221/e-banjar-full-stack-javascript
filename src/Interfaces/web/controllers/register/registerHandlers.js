const { useDispatch, useSelector } = require('react-redux');
const container = require('../../../../Infrastructures/container');
const errors = require('../../Models/error');
const responseServer = require('../../Models/responseServer');
const userRegister = require('../../Models/userRegister');

const registerHandlers = () => {
  const dispatch = useDispatch();
  const stateUserRegister = useSelector((state) => state.userRegister);
  const {
    name,
    ktp,
    currentAddress,
    oldAddress,
    actionUserRegister,
  } = userRegister.actions;
  const {
    actionError,
  } = errors.actions;
  const {
    actionResponseServer,
  } = responseServer.actions;
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
  const onHandlreRegister = async (event) => {
    event.preventDefault();
    const registerUserUseCase = container.getInstance('RegisterUserUseCase');
    await registerUserUseCase.execute(stateUserRegister, {
      dispatch, actionUserRegister, actionError, actionResponseServer,
    });
  };
  return [
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onHandlreRegister,
  ];
};

module.exports = registerHandlers;
