import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseurl from '../Api';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import { Breadcrumb, Card, Button, notification, message, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';

const OrderView = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('user');

const cancelRemove = () => {
    message.info('Cancelled removing item from cart');
}
  useEffect(() => {
    axios
      .get(`${baseurl}/order/fetch-orders`)
      .then((response) => {
        console.log('Fetched Orders:', response.data.orders);
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, [userId]);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await 
      axios.delete(`${baseurl}/order/remove-order/${orderId}`);
      if (response.status === 200) {
        console.log('Order canceled successfully');
                notification.open({
                    type: 'success',
                    message: 'Order canceled successfully',
                    placement: 'top',
                })
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      } else {
        console.error('Failed to cancel order', response.data.message);
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  }

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

      <div className='product-grid'>
        {orders.map((order) => (
          <Card
            key={order._id}
            hoverable
            style={{ width: 240, margin: '16px' }}
          >
            <Meta title={order.name} />
            <p>Address:{order.address}</p>
            <p>Phone No: {order.phone}</p>
            <p>District: {order.district}</p>
            <p>Payment: {order.payment}</p>

            <h4>Ordered Items:</h4>
            {order.items.map((item) => (
              <div key={item._id}>
                <p>Product ID: {item.productId}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
            <Popconfirm
              title="Are you sure you want to cancel this order?"
              onConfirm={() => handleCancelOrder(order._id)}
              onCancel={cancelRemove}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger style={{ marginTop: '8px' }}>
                Cancel Order
              </Button>
              </Popconfirm>
          </Card>
        ))}
      </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default OrderView;
