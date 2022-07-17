import { useDispatch } from 'react-redux';
import register from '../../Models/register';

const registerHandlers = (container) => {
  const dispatch = useDispatch();
  const registerAction = register.actions;
  const onChangeName = (event) => {
    dispatch(registerAction.inputName(event.target.value));
  };
  const onChangeKtp = (event) => {
    dispatch(registerAction.inputKtp(event.target.value));
  };
  const onChangeCurrentAddress = (event) => {
    dispatch(registerAction.inputCurrentAddress(event.target.value));
  };
  const onChangeOldAddress = (event) => {
    dispatch(registerAction.inputOldAddress(event.target.value));
  };
  const onHandlreRegister = (event) => {
    event.preventDefault();
    dispatch(registerAction.handlerRegister(container));
  };
  return [
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onHandlreRegister,
  ];
};

export default registerHandlers;
