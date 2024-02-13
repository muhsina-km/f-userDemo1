import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message, Typography } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const { Text } = Typography

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const { email, password } = values;
    axios.post('http://localhost:4005/register/login', { email, password })
      .then(result => {
        if (result.data === "Success") {
          navigate('/home')
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
    <div>
      <Navbar />
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
                { required: true, message: 'Please input your email!' },
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
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Text>
              Don't have an account? <Link to="/register">Create one</Link>
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
