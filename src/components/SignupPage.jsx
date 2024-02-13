import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const { Text } = Typography
const SignupPage = () => {

    const [name, setName] = useState()
    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Received values:', values);
    
        try {
            const result = await axios.post('http://localhost:4005/register/register', {
                name: values.name,
                email: values.email,
                password: values.password,
            });
    
            console.log(result);
    
            if (result.status === 201) {
                navigate('/login');
            } else {
                messageApi.open({
                    type: 'error',
                    content: 'this email is already registered',
                });
            }
        } catch (err) {
            messageApi.open({
                type: 'error',
                content: 'this email is already registered',
            });
            console.log(err);
        }
    }
    
    return (
        <div>
            <Navbar/>
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col span={8}>
                    <center><h1>Signup</h1></center>
                    <Form
                        name="signup-form"
                        onFinish={onFinish}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        requiredMark={false}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input onChange={(e) => setName(e.target.value)} />
                        </Form.Item>

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

                        <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{textAlign:'center', marginTop:'16px' }}>
                    <Text>
                        Already have an account? <Link to="/login">Login here</Link>
                    </Text>
                    </div>
                </Col>
            </Row>
            {contextHolder}
        </div>
    );
};

export default SignupPage;
