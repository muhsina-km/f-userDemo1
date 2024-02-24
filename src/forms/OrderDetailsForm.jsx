import React from 'react';
import { Form, Input } from 'antd';

const OrderDetailsForm = ({form, onFinish, values }) => {
  const handleValuesChange = (changedValues, allValues) => {
    onFinish(allValues); 
  };

  return (
    <Form
      form={form}
      name="order_details"
      layout="vertical"
      initialValues={{ ...values }}
      onValuesChange={handleValuesChange}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default OrderDetailsForm;
