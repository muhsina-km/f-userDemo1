import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../Api';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import { Breadcrumb, Card, Button, notification, message, Popconfirm, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const OrderView = () => {
  const [orders, setOrders] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const userId = localStorage.getItem('user');

  useEffect(() => {
    if (userId) {
      axios.get(`${baseurl}/order/fetch-orders`)
        .then((response) => {
          console.log('Fetched Orders:', response.data.orders);
          setOrders(response.data.orders);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
    }
  }, [userId]);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await axios.delete(`${baseurl}/order/remove-order/${orderId}`);
      if (response.status === 200) {
        messageApi.open({
          type: 'success',
          content: 'Order canceled successfully',
        });
        setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
      } else {
        console.error('Failed to cancel order', response.data.message);
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  const confirmRemove = (orderId) => {
    handleCancelOrder(orderId);
  };

  const cancelRemove = () => {
    message.info('Cancelled removing item from cart');
  };

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div style={{ backgroundColor: '#FFF5F5', paddingTop: '4px' }}>
      <Navbar />
      <Breadcrumb style={{ marginLeft: '60px', marginTop: '100px', marginBottom: '-80px' }}>
        <Breadcrumb.Item>
          <Link to='/home'>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to=''>orders</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      {contextHolder}
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '180px', marginBottom: '160px' }}>
        <h2 style={{ color: '#ED5945' }}>You have not placed any orders</h2>
        <h4>Explore our selection and add some blooming beauties to your Garden</h4>
        <Button style={{ marginTop: '-200px' }} type="primary" danger onClick={handleClick} >Go Back</Button>
      </div>
      ) : (
        <div className='product-grid'>
          {orders.map((order) => (
            <Card
              key={order._id}
              hoverable
              style={{ width: 440, margin: '16px' }}
            >
              {order.items.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <img src={item.plantphoto} alt="plant" style={{ height: '150px', width: '180px', objectFit: 'cover' }} />
                  <div style={{ marginLeft: '16px' }}>
                    <p>Product ID: {item.productId}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Product Name: {item.plantname}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                </div>
              ))}
              
              {order.status !== 'DELIVERED' && (
                <Space>
                  <p> <b>ORDERING</b> </p>
                  <Popconfirm
                    title="Are you sure to cancel this order?"
                    onConfirm={() => confirmRemove(order._id)}
                    onCancel={cancelRemove}
                    okText="Yes"
                    cancelText="No">
                    <Button type="primary" danger style={{ marginTop: '8px' }}>
                      Cancel Order
                    </Button>
                  </Popconfirm>
                </Space>
              )}
              {order.status === 'DELIVERED' && <p style={{ color: 'green', marginTop: '8px' }}> <b>Order Delivered</b> </p>}
            </Card>
          ))}
        </div>
      )}


      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default OrderView;