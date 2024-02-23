import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Button, Card, Col, Row } from 'antd'
import axios from 'axios'
import CartCard from './CartCard'
import {motion} from 'framer-motion';
import { Footer } from 'antd/es/layout/layout'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CountUp from 'react-countup'

const ViewCart = () => {
    const [cart, setCart] = useState([])
    const [total, setCartTotal] = useState(0)
    const [animationCompleted, setAnimationCompleted] = useState(false);
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
        setAnimationCompleted(true);
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
    
  return (
    <div>
        <Navbar/><h1 style={{marginTop:'80px', textAlign:'center'}}>View Cart</h1>
        <Row style={{marginTop:'10px'}} gutter={16}>
                {cart.map((item, index) => (
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
                    transition={{type:'spring', delay: animationCompleted ? 0.1 * index : 0 }}
                  >
                    <Col sm={12} md={8} lg={8} xl={4} key={item.productId}>
                    <CartCard data={item}/>
                    </Col></motion.div>
                ))}
        </Row>
        <Footer style={{borderTop:'1px solid #E2E2E2',alignItems:'center', height: '70px',textAlign: 'center',position: 'fixed', bottom: '0', width: '100%',display:'flex',justifyContent:'space-between' }}><h3>Total Price:₹<CountUp end={total} /></h3><Button type="primary" icon={<ShoppingCartOutlined />}>Place Order</Button></Footer>
        </div>
  )
}

export default ViewCart