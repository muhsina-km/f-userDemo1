// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { List, Image, Typography, Divider, Button } from 'antd';

const { Text, Title } = Typography;

const Cart = () => {
  const { cart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Divider orientation="left">
        <Title level={3}>Your Cart</Title>
      </Divider>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{marginLeft:'50px'}}>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Image src={item.plantphoto} alt={item.plantname} width={100} />}
                  title={<Title level={4}>{item.plantname}</Title>}
                  description={
                    <div>
                      <Text strong>Price: ₹{item.price}</Text>
                      <br />
                      <Text>Quantity: {item.quantity}</Text>
                      {/* Add more details as needed */}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          <Divider />
          <div>
            <Text strong>Total Amount:</Text>
            <Text type="success"> ₹{totalAmount.toFixed(2)}</Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
