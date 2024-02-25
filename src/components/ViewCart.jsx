import React, { useEffect, useState } from 'react'
import './Style.css'
import Navbar from './Navbar'
import { Breadcrumb, Button, Card, Col, Modal, Row, notification } from 'antd'
import axios from 'axios'
import CartCard from './CartCard'
import { motion } from 'framer-motion';
import { Footer } from 'antd/es/layout/layout'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import PlaceOrder from '../popups/PlaceOrder'

const ViewCart = () => {
    const [cart, setCart] = useState([])
    const [isPlaceOpen, setIsPlaceOpen] = useState(false)
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

    const removeFromCart = async (email, productId) => {
        console.log('Removing from cart:', { email, productId })
        try {
            const response = await
                axios.post('http://localhost:4005/cart/remove-from-cart', {
                    email: email,
                    productId,
                });
            console.log('Remove from cart', response);
            if (response.status === 200) {
                console.log('Item removed from cart');
                notification.open({
                    type: 'success',
                    message: 'Item removed from cart',
                    placement: 'top',
                })
                setCart(prevCart => prevCart.filter(item => item.productId !== productId));
                //Recalculate total
                axios.get('http://localhost:4005/cart/calculate-total-price', {
                    params: {
                        email: email
                    },
                })
                    .then(res => {
                        setCartTotal(res.data.totalPrice);
                    }).catch(err => {
                        console.log(err);
                    })

            } else {
                console.log('Failed to remove from cart');
            }
        } catch (error) {
            console.log('Error removing from cart', error);
        }
    }

    return (
        <div style={{ backgroundColor: '#FFF5F5', paddingTop: '4px',minHeight:"100vh" }}>
            <Navbar />
            <Breadcrumb style={{ marginLeft: '60px', marginTop: '80px', marginBottom: '-110px' }}>
                <Breadcrumb.Item>
                    <Link to='/home'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to=''>Cart</Link>
                </Breadcrumb.Item>
            </Breadcrumb>

            <div>
            <h2 style={{ marginTop: '100px', textAlign: 'center' }}>Cart Items</h2>
            <Row  className='product-grid'
                style={{ marginTop: '10px', marginLeft: '24px' }} gutter={16}>
                {cart.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
                        transition={{ type: 'spring', delay: animationCompleted ? 0.1 * index : 0 }}
                    >
                        <Col sm={12} md={8} lg={8} xl={4} key={item.productId}>
                            <CartCard data={item} removeFromCart={() => removeFromCart(email, item.productId)} />
                        </Col></motion.div>
                ))}
            </Row>
            </div>
            <Row>
                <br /> <br /> <br /> <br />
            </Row>
            <Footer style={{
                borderTop: '1px solid #E2E2E2', alignItems: 'center',
                height: '60px', textAlign: 'center', position: 'fixed',
                bottom: '0', width: '100%', display: 'flex', justifyContent: 'space-between'
            }}>
                <h3>Total Price:₹<CountUp end={total} /></h3>
                <Button onClick={() => setIsPlaceOpen(true)} type="primary" icon={<ShoppingCartOutlined />}>
                    Place Order
                </Button></Footer>
            <Modal
                width={700}
                title="Place Order"
                open={isPlaceOpen}
                footer={null}
                onCancel={() => setIsPlaceOpen(false)}
            >
                <PlaceOrder setOpened={setIsPlaceOpen} cart={cart}/>
            </Modal>
        </div>
    )
}

export default ViewCart