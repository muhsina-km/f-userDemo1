import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  
  const onFinish = (values) => {
    const { email, password } = values;
    axios.post('http://localhost:3005/login', { email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate('/home');
        } else {
          messageApi.open({
            type: 'error',
            content: 'Invalid email or password',
          });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      {contextHolder}
      <Col span={8}>
        <center><h1>Login</h1></center>
        <Form
          name="login-form"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 12, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;