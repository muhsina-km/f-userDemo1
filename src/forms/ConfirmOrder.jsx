import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Table } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const ConfirmOrder = ({ formdata }) => {
    const [cart, setCart] = useState([]);
    const [total, setCartTotal] = useState(0);
    const user = localStorage.getItem('user');
    const email = user ? JSON.parse(user).email : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('http://localhost:4005/cart/view-cart', {
            params: {
                email: email
            }
        })
        .then(res => {
            console.log(res.data);
            setCart(res.data.cart);
        })
        .catch(err => {
            console.log(err);
        });
        axios.get('http://localhost:4005/cart/calculate-total-price', {
            params: {
                email: email
            }
        })
        .then(res => {
            console.log(res);
            setCartTotal(res.data.totalPrice);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 

    const columns = [
        {
            title: 'Item',
            dataIndex: 'plantname',
            key: 'plantname',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => (
                <span>₹{text}</span>
            ),
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Card>
                <Title level={3}>Confirm Order</Title>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <div>
                            <Title level={4}>Customer Details</Title>
                            <Text strong>Name:</Text> <Text>{formdata.name}</Text><br />
                            <Text strong>Phone:</Text> <Text>{formdata.phone}</Text><br />
                            <Text strong>Address:</Text> <Text>{formdata.address}</Text><br />
                            <Text strong>Payment:</Text> <Text>{formdata.payment}</Text><br />
                        </div>
                    </Col>
                    <Col span={16}>
                        <div style={{marginTop: '20px'}}>
                            <Table
                                dataSource={cart}
                                columns={columns}
                                pagination={false}
                                summary={() => (
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell index={0} colSpan={2}>Total:</Table.Summary.Cell>
                                        <Table.Summary.Cell index={1} colSpan={1}>₹{total}</Table.Summary.Cell>
                                    </Table.Summary.Row>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ConfirmOrder;
