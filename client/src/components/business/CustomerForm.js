import { Form, Input } from 'antd';

const CustomerForm = ({ form }) => {
  return (
    <>
      <Form layout={'vertical'} form={form} name="customer">
        <Form.Item name="name" label="Customer Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomerForm;
