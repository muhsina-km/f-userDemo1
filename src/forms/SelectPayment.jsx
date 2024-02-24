import React from 'react';
import { Radio } from 'antd';

const SelectPayment = ({ onSelect }) => {
  const handleSelectPayment = (e) => {
    onSelect({ payment: e.target.value }); // Pass selected payment method as an object
  };

  return (
    <div>
      <Radio.Group onChange={handleSelectPayment} defaultValue="cash">
        <Radio.Button disabled value="online">Online Payment</Radio.Button>
        <Radio.Button value="cash">Cash on Delivery</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default SelectPayment;
