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
  message,
} from 'antd';
import AddCustomerDialog from './AddCustomerDialog';
import { openErrorNotification, openSuccessNotification } from '../Notification';
const { Option } = Select;

const TransactionForm = ({ form, customersList = [], updateCustomersList }) => {
  const [formValues, setFormValues] = useState({});
  const [currentCustomerObj, setCurrentCustomerObj] = useState(null);
  const [currentReward, setCurrentReward] = useState(0);
  const [customerId, setCustomerId] = useState(null);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [isNewCustomerModalVisible, setIsNewCustomerModalVisible] = useState(false);
  const [isCustomerLoading, setIsCustomerLoading] = useState(false);

  const [newCustomerRegistered, setNewCustomerRegistered] = useState('');

  const getCustomerByPhone = (phone) => {
    return customersList?.find((item) => item.phone === phone);
  };

  useEffect(()=>{
    if(customersList.length && newCustomerRegistered){
      const currentCustomer = getCustomerByPhone(newCustomerRegistered);
      setCurrentCustomerObj(currentCustomer);
      setCurrentReward(currentCustomer?.reward || 0);
      setCustomerId(currentCustomer?.id);
      setNewCustomerRegistered("")
    }
  },[customersList])

  function handleChange(changedValues, allValues) {
    console.log(changedValues);
    // customer change
    if (changedValues.customerId) {
      const currentCustomer = getCustomerByPhone(changedValues.customerId);
      setCurrentCustomerObj(currentCustomer);
      setCurrentReward(currentCustomer.reward || 0);
      setCustomerId(currentCustomer?.id);
    }
    // transaction change
    if (changedValues.transactionAmount !== undefined) {
      setCurrentReward(currentCustomerObj?.reward || 0);
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
      transactionAmount: 0,
    });
  }, [customerId]);

  const onUtiliseRewards = () => {
    const { transactionAmount, redeemPercent } = formValues;

    if (redeemPercent && !isRedeemed) {
      const redeemAmount = (redeemPercent / 100) * currentReward;
      const finalAmount = transactionAmount - redeemAmount;
      if (transactionAmount < redeemAmount) {
        message.error('Sorry! Transaction amount should be greater than the amount to be redeemed');
        return;
      }
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

  const onRegisterNewCustomer = (values) => {
    const data = {
      ...values,
      type: 'Customer',
      isNotify: true,
    };
    setIsCustomerLoading(true);
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        openSuccessNotification(
          'Hurray! Customer registered successfully. You can go ahead with the transaction',
        );
        updateCustomersList();
        form.setFieldsValue({...formValues, customerId:values.phone});
        setNewCustomerRegistered(values.phone);
        return res;
      })
      .catch((err) => {
        console.log("failed error: ", err);
        openErrorNotification('Failed to register new customer,please try again');
      })
      .finally(() => {
        setIsCustomerLoading(false);
        setIsNewCustomerModalVisible(false)
      });
  };

  return (
    <>
      {isNewCustomerModalVisible && (
        <AddCustomerDialog
          isModalVisible={isNewCustomerModalVisible}
          setIsModalVisible={setIsNewCustomerModalVisible}
          onAddCustomer={onRegisterNewCustomer}
          isLoading={isCustomerLoading}
        />
      )}
      <Form onValuesChange={handleChange} layout={'vertical'} form={form} name="transaction">
        <Row align="middle">
          <Form.Item name="customerId" label="Customer ID" rules={[{ required: true }]}>
            <Select
              placeholder="Select a customer"
              showSearch
              allowClear
              style={{ width: '300px' }}
            >
              {customersList.map((item) => (
                <Option value={item.phone}>{item.phone}</Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="link" onClick={() => setIsNewCustomerModalVisible(true)}>
            Register new customer
          </Button>
        </Row>

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
            <Radio.Group disabled={isRedeemed || !currentReward}>
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
          <InputNumber />
        </Form.Item>
        <Form.Item label="id" name="id" hidden>
          <InputNumber />
        </Form.Item>
      </Form>
    </>
  );
};

export default TransactionForm;
