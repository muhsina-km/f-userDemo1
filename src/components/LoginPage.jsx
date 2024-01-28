import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform login logic here
    const {email,password } = values;
    axios.post('http://localhost:3005/login', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "Success") {
            navigate('/home')
        } else {
         setError('Enter valid email or password')
        }
    })
    .catch(err => console.log(err))
  };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3005/login', {email, password})
//     .then(result => {
//         console.log(result)
//         if(result.data === "Success") {
//             navigate('/home')
//         }
//     })
//     .catch(err => console.log(err))
//   }

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
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
          <p>{error && <div style={{ color: 'red', textAlign:'center' }}>{error}</div>}</p>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
