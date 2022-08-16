const { useDispatch } = require('react-redux');
const notification = require('../../../model/notification');

const HandlerNotification = () => {
  const dispatch = useDispatch();
  const { actionNotification } = notification.actions;
  const dispatchNotification = (payload) => {
    if (payload.status) {
      setTimeout(() => {
        dispatch(actionNotification({
          status: '',
          mode: false,
          message: '',
        }));
      }, 3000);
      dispatch(actionNotification({
        status: payload.status,
        mode: true,
        message: payload.message,
      }));
    }
  };
  return { dispatchNotification };
};

module.exports = HandlerNotification;
