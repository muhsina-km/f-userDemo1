import React, { useState } from "react";
import { Button, Form, message, notification, Steps, theme } from "antd";
import OrderDetailsForm from "../forms/OrderDetailsForm";
import SelectPayment from "../forms/SelectPayment";
import { IdcardOutlined, CheckCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import ConfirmOrder from "../forms/ConfirmOrder";
import axios from "axios";

const { Step } = Steps;

const PlaceOrder = ({setOpened , cart}) => {
  const [formdata, setFormdata] = useState({ name: "", phone: "", address: "", payment: "cash" });
  const [error, setError] = useState("");
  const [form] = Form.useForm();
  const user = localStorage.getItem("user");
  const email = user && JSON.parse(user).email;
  const handleOnChange = (values) => {
    console.log(formdata);
    setFormdata({
      ...formdata,
      ...values,
      email: email,
      items: cart.map(items => ({ productId: items.productId, quantity: items.quantity })),
    });
  };

  const handleOnFinish = async () => {
    try {
      console.log('formdata:', formdata);
      const response = await 
      axios.post('http://localhost:4005/order/place-order', formdata);
      console.log('Bakend Response:',response.data);
      if (response.status === 201) {
        //message.success("Order Placed Successfully");
          notification.open({
            type: 'success',
            message: 'Order Placed successfully',
            description: 'Thank you for shopping with us',
            placement: 'top',
          })
        setOpened(false);
      } else {
        message.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      message.error("Failed to place order");
    }
  };

  const steps = [
    {
      title: "Shipping Details",
      icon: <IdcardOutlined />,
      content: <OrderDetailsForm form={form} onFinish={handleOnChange} values={formdata} />,
    },
    {
      title: "Select Payment",
      icon: <CreditCardOutlined />,
      content: <SelectPayment onSelect={handleOnChange} />,
    },
    {
      title: "Order Placed",
      icon: <CheckCircleOutlined />,
      content: <ConfirmOrder formdata={formdata} />,
    },
  ];
  // const { token } = theme.useToken();
  const token = {};
  const [current, setCurrent] = useState(0);
  const next = async () => {
    try {
      const values = await form.validateFields();
      handleOnChange(values);
      setCurrent(current + 1);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 24,
  };
  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              handleOnFinish();
            }}
          >
            Confirm
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default PlaceOrder;
