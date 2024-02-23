import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Card, Col, Row } from 'antd'
import axios from 'axios'
import CartCard from './CartCard'

const ViewCart = () => {
    const [cart, setCart] = useState([])
    const email = localStorage.getItem('user');
    const { Meta } = Card;
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
            console.log(res.data);
            setCart(res.data.cart.items);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 
    
  return (
    <div>
        <Navbar/><h1 style={{marginTop:'80px', textAlign:'center'}}>View Cart</h1>
        <Row style={{marginTop:'10px'}} gutter={16}>
                {cart.map(item => (
                    <Col sm={12} md={8} lg={8} xl={4} key={item.productId}>
                    <CartCard data={item}/>
                    </Col>
                ))}
        </Row>
        </div>
  )
}

export default ViewCart