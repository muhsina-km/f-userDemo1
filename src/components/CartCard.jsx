import { Button, Card, Col, Popconfirm, Row, Skeleton, Space, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseurl from '../Api';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CartCard = ({ data, removeFromCart }) => {
    const { email, productId, plantname, price, quantity, plantphoto } = data;
    const count = parseInt(data.quantity);

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const confirmRemove = () => {
        removeFromCart(email, productId);
        message.success('Item removed from cart');
    }

    const cancelRemove = () => {
        message.info('Cancelled removing item from cart');
    }

    return (
        <Card
            hoverable
            style={{ width: '230px', marginLeft: 'auto', marginRight: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px', }}>
            {data ? (<><Row>
                <Col span={24}>
                    <img src={data.plantphoto} style={{ height: '150px', width: '180px', objectFit: 'cover' }} alt="plant" />
                </Col>
                <Row>
                    <Col span={24}>
                        <h3>{data.plantname}</h3>
                        <p> ₹:{data.price} </p>
                        <p> Total Items:{data.quantity} </p>
                        <p> Total Price:₹{data.price * count} </p>
                        <Space style={{ marginLeft: '-12px' }}>
                            <Link to={`/view/${productId}`} onClick={handleLinkClick}>
                                <Button type="primary" size='small' icon={<EyeOutlined />}>
                                    View
                                </Button></Link>
                                <Popconfirm 
                                    title="Are you sure to remove this item from cart?"
                                    onConfirm={confirmRemove}
                                    onCancel={cancelRemove}
                                    okText="Yes"
                                    cancelText="No">
                            <Button type="primary" danger size='small'>
                                Remove from Cart
                            </Button>
                            </Popconfirm>
                        </Space>
                    </Col>
                </Row>
            </Row></>) : <Skeleton active />}
        </Card>
    )
}

export default CartCard
