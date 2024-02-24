import React from 'react';
import { Form, Input, Select } from 'antd';
import districts from '../data/districts.json'; // Import the districts JSON file

const { Option } = Select;

const OrderDetailsForm = ({ form, onFinish, values }) => {
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
        rules={[{ required: true, message: 'Please input your phone number!' }]}
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

      <Form.Item
        label="District"
        name="district"
        rules={[{ required: true, message: 'Please select your district!' }]}
      >
        <Select
          placeholder="Select district"
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {districts.districts.map((district, index) => (
            <Option key={index} value={district}>{district}</Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default OrderDetailsForm;