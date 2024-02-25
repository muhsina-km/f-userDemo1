import { Button, Card, Col, Row, Skeleton } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseurl from '../Api';

const CartCard = ({ data, removeFromCart }) => {
    const { email, productId, plantname, price, quantity, plantphoto } = data;
    const count = parseInt(data.quantity);
    return (
        <Card
            hoverable
            style={{ width: '230px', marginLeft: 'auto', marginRight: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px', }}>
            {data ? (<><Row>
                <Col span={24}>
                    <img src={data.plantphoto}  style={{ height: '150px', width: '180px', objectFit: 'cover' }} alt="plant" />
                </Col>
                <Row>
                    <Col span={24}>
                        <h4>{data.plantname}</h4>
                        <p>₹:{data.price}</p>
                        <p>Total Items:{data.quantity}</p>
                        <p>Total Price:₹{data.price * count}</p>
                        <Button type="primary" danger onClick={() => removeFromCart(email, productId)}>
                            Remove From Cart
                        </Button>
                    </Col>
                </Row>
            </Row></>) : <Skeleton active />}
        </Card>
    )
}

export default CartCard
