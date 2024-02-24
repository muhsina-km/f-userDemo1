import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../Api';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import { Breadcrumb, Card, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Meta from 'antd/es/card/Meta';

const PlaceOrder = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('user');
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseurl}/orders/place-order`)
      .then((response) => {
        console.log(response.data.orders);
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, [userId]);

  return (
    <div style={{backgroundColor:'#FFF5F5'}}>
      <Navbar />
      <Breadcrumb style={{ marginLeft: '60px', marginTop: '100px', marginBottom: '-80px' }}>
        <Breadcrumb.Item>
          <Link to='/home'>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/place-order'>Orders</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      
      <div className='product-grid'>
        {orders.map((orders,index) => (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
          transition={{type:'spring', delay: animationCompleted ? 0.1 * index : 0 }}
        >
          <Card
            key={orders.id}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt="plant" src={orders.plantphoto} style={{ height: '150px', objectFit: 'cover' }} />}
          >
            <Meta title={orders.plantname} />
            <Meta title={`₹${orders.price}`}  description={orders.size} />
            <Link to={`/view/${orders.plantid}`}>
            <Button type="primary" style={{ marginTop: '8px' }}>
              Product Details</Button> </Link>
          </Card></motion.div>
        ))}
    </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default PlaceOrder;