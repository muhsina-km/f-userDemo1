import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../Api';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import { Breadcrumb, Card, Button, notification, message, Popconfirm, Space, Image } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { EyeOutlined } from '@ant-design/icons';

const OrderView = () => {
  const [orders, setOrders] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const userId = localStorage.getItem('user');
  const email = userId ? JSON.parse(userId).email : null;

  const getCurrentDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (email) {
          const response = await axios.get(`${baseurl}/order/fetch-orders`, {
            params: {
              email: email
            }
          });
          console.log('Fetched Orders:', response.data.orders);
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, [email]);

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

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
        <div className='ordercss'>
          {orders.map((order) => (
            <Card
              key={order._id}
              hoverable
              style={{ width: '80%', margin: '16px', marginLeft: '90px', marginRight: '50px' }}
            >
              <h3 style={{ textAlign: 'center', marginBottom: '0px', marginTop: '0px', marginLeft: '-90px' }}>
                Ordered on {getCurrentDate(new Date())}</h3>
              {order.items.map((item, index) => (
                <div key={index}
                  hoverable
                  style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                  <Image src={item.plantphoto} alt="plant"
                    style={{ height: '100px', width: '120px', objectFit: 'cover' }} />
                  <div style={{ marginLeft: '40px' }}>
                    <p>Product Name: {item.plantname}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <Link to={`/view/${item.productId}`} onClick={handleLinkClick}>
                      <Button type="primary" size='small' icon={<EyeOutlined />}>
                        View Product
                      </Button></Link>
                  </div>
                </div>
              ))}

              <div style={{ marginLeft: '680px', marginTop: '-60px' }}>
                {order.status !== 'DELIVERED' && (
                  <div style={{ marginLeft: '20px' }}>
                    <p style={{ color: '#346fe9', marginLeft: '18px' }}> <b>ORDERING</b> </p>
                    <Popconfirm
                      title="Are you sure to cancel this order?"
                      onConfirm={() => confirmRemove(order._id)}
                      onCancel={cancelRemove}
                      okText="Yes"
                      cancelText="No">
                      <Button type="primary" danger style={{ marginTop: '-60px' }}>
                        Cancel Order
                      </Button>
                    </Popconfirm>
                  </div>
                )}

                {order.status === 'DELIVERED' && <p style={{ color: 'green', marginTop: '8px' }}> <b>ORDER DELIVERED</b> <DoneAllIcon style={{ marginBottom: '-6px' }} /> </p>}
              </div>

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