import { Button, notification } from 'antd';

export const openErrorNotification = (description) => {
  notification.error({
    message: 'Error',
    description: description,
  });
};

export const openSuccessNotification = (description) => {
  notification.open({
    message: 'Success',
    description: description,
  });
};
