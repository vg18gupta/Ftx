import { Modal, Form } from 'antd';
import TransactionForm from './TransactionForm';
const AddTransactionDialog = ({
  isModalVisible,
  onAddTransaction,
  setIsModalVisible,
  customersList,
  updateCustomersList,
  isLoading,
}) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      onAddTransaction(values);
      form.resetFields();
      setIsModalVisible(false);
    });
  };
  return (
    <Modal
      title="Add New Transaction"
      visible={isModalVisible}
      onOk={onSubmit}
      okText="Add"
      onCancel={handleCancel}
      confirmLoading={isLoading}
      width={700}
    >
      <TransactionForm
        form={form}
        customersList={customersList}
        updateCustomersList={updateCustomersList}
      />
    </Modal>
  );
};

export default AddTransactionDialog;
