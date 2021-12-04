import { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber, Checkbox, Radio, Alert } from 'antd';
const { Option } = Select;

const TransactionForm = ({ form, customersList = [] }) => {
  const [ currentTransactionValue, setCurrentTransactionValue] = useState(false)
  function handleChange() {
    const fieldValues = form.getFieldsValue();
    if(currentTransactionValue > 1000 && fieldValues.redeem) {
      const redeemValue = fieldValues?.redeem;
      const currentReward = customersList?.find((item)=>item.phone===fieldValues?.customerId)?.reward;
      const amountToDeduct = (redeemValue/100) * currentReward;
      const finalAmount = currentTransactionValue - amountToDeduct;
      form.setFieldsValue({...fieldValues,transactionAmount:finalAmount,redeem:redeemValue})
    } else {

    }
    //setFormUpdate(true)
  }
  function handleTransactionValueChange(e) {
      setCurrentTransactionValue(e.target.value);
  }
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
      <Form.Item label="Transaction Amount" name="transactionAmount" rules={[{ required: true }]} onChange={handleTransactionValueChange}>
        <InputNumber style={{ width: '300px' }} />
      </Form.Item>
      {
        form.getFieldValue('customerId') && (<Alert style={{width: "300px", marginBottom: "20px"}} message={`Current reward balance ${customersList.find((item)=>item.phone===form.getFieldValue("customerId"))?.reward}`} type="info" />)
      }
      <Form.Item label="Select % of reward points to redeem" name="redeem">
        <Radio.Group>
          <Radio value="0">0</Radio>
          <Radio value="25">25%</Radio>
          <Radio value="50">50%</Radio>
          <Radio value="75">75%</Radio>
          <Radio value="100">100%</Radio>
        </Radio.Group>
        <Button type="link" disabled={form.getFieldValue('redeem')} onClick={handleChange}>Utilise Rewards</Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
