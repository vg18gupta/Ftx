import { Button, notification } from 'antd';

export const openNotification = (description) => {
  notification.error({
    message: "Error",
    description: description,
  });
};

export const openSucessNotification = (description) => {
  notification.open({
    message: "Sucess",
    description: description,
  });
};
