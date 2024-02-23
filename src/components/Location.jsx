import React, { useState } from 'react';
import { Form, Input, Select, Button, Card } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

const Location = () => {
    var [inputs,setInputs] = useState({ name: '', address: '', place: '', district: '', phone: '' })

   const navigate = useNavigate();

  const InputHandler = (event) => {
    const {name,value} = event.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }
  const onFinish = async (values) => {
    console.log('Received values:', values);
    try {
        const response = await axios.post('/http://localhost:4005/location/location', inputs);
        if (response.status === 201) {
            navigate('/transaction');
        } else {
            alert("Something went wrong");
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert("Something went wrong");
    }
};

  return (
    <div>
        <Navbar/>
        <Card 
        title="Order Form" 
        style={{ width: 500, margin: '0 auto', marginTop: '100px' }}
        align="center">
        <Form
      name="orderForm"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      requiredMark={false}
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input  name="name"
        value={inputs.name} onChange={InputHandler}/>
      </Form.Item>

      <Form.Item
        label="Address"
        rules={[{ required: true, message: 'Please enter your address!' }]}
      >
        <Input name="address"
        value={inputs.address} onChange={InputHandler}/>
      </Form.Item>

      <Form.Item
        label="Place"
        rules={[{ required: true, message: 'Please enter your place!' }]}
      >
        <Input name="place"
        value={inputs.place} onChange={InputHandler}/>
      </Form.Item>

      <Form.Item
        label="District"
        rules={[{ required: true, message: 'Please select your district!' }]}
      >
        <Input name="district"
        value={inputs.district} onChange={InputHandler}/>
      </Form.Item>

      <Form.Item
        label="Phone Number"
        rules={[
          { required: true, message: 'Please enter your phone number!' },
          { pattern: /^[0-9]+$/, message: 'Please enter a valid phone number!' },
        ]}
      >
        <Input name="phoneNumber"
        value={inputs.phone} onChange={InputHandler}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Place Order
        </Button>
      </Form.Item>
    </Form>
        </Card>
        <div> <Footer/> </div>
    </div>
  );
};

export default Location;