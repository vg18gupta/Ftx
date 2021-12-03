import { Form, Input, Button, Select, DatePicker, InputNumber, Checkbox, Radio } from 'antd';
const { Option } = Select;

const TransactionForm = ({ form, customersList = [] }) => {
  console.log(customersList);
  return (
    <Form layout={'vertical'} form={form} name="transaction">
      <Form.Item name="customerId" label="Customer ID" rules={[{ required: true }]}>
        <Select placeholder="Select a customer" showSearch allowClear style={{ width: '300px' }}>
          {customersList.map((item) => (
            <Option value={item.phone}>{item.phone}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Transaction Date" name="transactionDate" rules={[{ required: true }]}>
        <DatePicker style={{ width: '300px' }} />
      </Form.Item>
      <Form.Item label="Transaction Amount" name="transactionAmount" rules={[{ required: true }]}>
        <InputNumber style={{ width: '300px' }} />
      </Form.Item>
      <Form.Item label="Select % of reward points to redeem" name="size">
        <Radio.Group>
          <Radio value="0">0</Radio>
          <Radio value="25">25%</Radio>
          <Radio value="50">50%</Radio>
          <Radio value="75">75%</Radio>
          <Radio value="100">100%</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
