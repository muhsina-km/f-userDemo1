import { Card, Col, Row, Skeleton } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseurl from '../Api';

const CartCard = ({data}) => {
    const count = parseInt(data.quantity);
  return (
    <Card 
    hoverable 
    style={{width:'230px', marginLeft:'auto', marginRight:'auto',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px', }}>
        {data?(<><Row>
            <Col span={24}>
        <img src={data.plantphoto} style={{width:'100%'}} alt="plant" />
        </Col>
        <Row>
            <Col span={24}>
                <p>{data.plantname}</p>
                <p>₹:{data.price}</p>
                <p>Total Items:{data.quantity}</p>
                <p>Total Price:₹{data.price*count}</p>
            </Col>
            </Row>
        </Row></>):<Skeleton active/>}
      </Card>
  )
}

export default CartCard
