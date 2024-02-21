import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Card, Row } from 'antd'
import axios from 'axios'

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
            setCart(res.data.cart.items);
        })
        .catch(err => {
            console.log(err);
        });
    }, []); 
    
  return (
    <div>
        <Navbar/><h1 style={{marginTop:'80px', textAlign:'center'}}>View Cart</h1>
        <Row style={{marginTop:'100px'}}>
            <div className='categ-grid' style={{ display: 'grid', justifyContent: 'center', padding: '10px', marginBottom: '100px' }}>
                {cart.map(item => (
                    <Card
                        hoverable
                        style={{ width: 240, margin: '16px' }}
                        // cover={<img alt="plant" src={item.image}
                        >
                        <Meta title={item.quantity} description={item.productId} />
                        </Card>
                ))}
            </div>
        </Row></div>
  )
}

export default ViewCart