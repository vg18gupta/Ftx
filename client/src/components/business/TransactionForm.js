import { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Checkbox,
  Radio,
  Alert,
  Badge,
  Row,
} from 'antd';
const { Option } = Select;

const TransactionForm = ({ form, customersList = [] }) => {
  const [formValues, setFormValues] = useState({});
  const [currentReward, setCurrentReward] = useState(0);
  const [customerId, setCustomerId] = useState(null);
  const [isRedeemed, setIsRedeemed] = useState(false);
  function handleChange(changedValues, allValues) {
    console.log(changedValues);
    if (changedValues.customerId) {
      const currentCustomer = customersList?.find((item) => item.phone === changedValues.customerId);
      setCurrentReward(currentCustomer.reward || 0);
      setCustomerId(currentCustomer?.id);
    }
    if (changedValues.transactionAmount !== undefined) {
      setIsRedeemed(false);
    }
    setFormValues(allValues);
  }

  useEffect(() => {
      form.setFieldsValue({
        ...formValues,
        id: customerId,
        redeemAmount: 0,
        redeemPercent: 0,
        transactionAmount: 0
      });
  }, [customerId])
  
  const onUtiliseRewards = () => {
    const { transactionAmount, redeemPercent } = formValues;
    if (transactionAmount > 1000 && redeemPercent && !isRedeemed) {
      const redeemAmount = (redeemPercent / 100) * currentReward;
      const finalAmount = transactionAmount - redeemAmount;
      form.setFieldsValue({
        ...formValues,
        transactionAmount: finalAmount,
        redeemAmount: redeemAmount,
        id: customerId,
      });
      setIsRedeemed(true);
      setCurrentReward(currentReward - redeemAmount);
    }
  };

  return (
    <Form onValuesChange={handleChange} layout={'vertical'} form={form} name="transaction">
      <Form.Item name="customerId" label="Customer ID" rules={[{ required: true }]}>
        <Select placeholder="Select a customer" showSearch allowClear style={{ width: '300px' }}>
          {customersList.map((item) => (
            <Option value={item.phone}>{item.phone}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Transaction Amount" name="transactionAmount" rules={[{ required: true }]}>
        <InputNumber style={{ width: '300px' }} />
      </Form.Item>

      {formValues['customerId'] && (
        <Alert
          style={{ width: '300px', marginBottom: '20px' }}
          message={
            <div>
              Current reward balance{''}
              <Badge
                count={currentReward}
                overflowCount={99999}
                showZero
                style={{ backgroundColor: '#e9ad03', marginLeft: '5px' }}
              />
            </div>
          }
          type="info"
        />
      )}
      <Row align="middle">
        <Form.Item label="Select % of reward points to redeem" name="redeemPercent">
          <Radio.Group disabled={isRedeemed}>
            <Radio value="0">0%</Radio>
            <Radio value="25">25%</Radio>
            <Radio value="50">50%</Radio>
            <Radio value="75">75%</Radio>
            <Radio value="100">100%</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          type="link"
          disabled={
            !(formValues['redeemPercent'] > 0) ||
            !formValues['transactionAmount'] ||
            isRedeemed ||
            !currentReward
          }
          onClick={onUtiliseRewards}
        >
          Utilise Rewards
        </Button>
      </Row>
      <Form.Item label="Amount redeemed" name="redeemAmount" hidden>
        <InputNumber style={{ width: '300px' }} />
      </Form.Item>
      <Form.Item label="id" name="id" hidden>
        <InputNumber style={{ width: '300px' }} />
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
