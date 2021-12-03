import { Modal, Form } from 'antd';
import TransactionForm from './TransactionForm';
const AddTransactionDialog = ({
  isModalVisible,
  onAddTransaction,
  setIsModalVisible,
  customersList,
}) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  const onSubmit = () => {
    form.validateFields().then((values) => {
      onAddTransaction(values)
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
    >
      <TransactionForm form={form} customersList={customersList} />
    </Modal>
  );
};

export default AddTransactionDialog;
