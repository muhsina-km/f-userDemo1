import { Button, Card, InputNumber, Space, notification } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'


const AddToCart = ({ productId, onClose,addedToCart}) => {
    const [value, setValue] = useState('1');

    const addToCart = async () => {
        const user = localStorage.getItem('user');
        const email = user ? JSON.parse(user).email : null;
        if (!email) {
          notification.open({
            type: 'warning',  
            message: 'Please Login first to add items to cart',
            placement: 'topLeft',
          })
          return;
        }
        try {
          const response = await axios.post('http://localhost:4005/cart/add-to-cart', {
            email,
            productId,
            quantity: value,
          });
          console.log(response.data);
          addedToCart();
        } catch (error) {
          console.error('Error:', error.message); // Log the error message
        }
      };
      
  return (
    <Card title="Add To Cart">
        <Space>
     Select Quantity <InputNumber min={1} max={100} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(1);
        }}
      >
        Reset
      </Button>
    </Space>
    <h3 style={{marginLeft:'28px'}}>Quantity : {value}</h3>
    <br />
    <Space size="large" style={{ marginTop: '0px' }}>
    <Button type="primary" onClick={onClose}>Cancel</Button>
    <Button type="primary" onClick={addToCart}>Add To Cart</Button>
    </Space>
    </Card>
  )
}

export default AddToCart