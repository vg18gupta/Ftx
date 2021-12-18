import { Modal, Form } from 'antd';
import CustomerForm from './CustomerForm';

const AddCustomerDialog = ({ isModalVisible, setIsModalVisible, onAddCustomer, isLoading }) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      onAddCustomer(values);
      form.resetFields();
    });
  };
  return (
    <Modal
      title="Register new customer"
      visible={isModalVisible}
      onOk={onSubmit}
      okText="Register"
      onCancel={handleCancel}
      confirmLoading={isLoading}
    >
      <CustomerForm form={form} />
    </Modal>
  );
};

export default AddCustomerDialog;
