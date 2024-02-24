import React, { useState } from "react";
import { Button, Form, message, Steps, theme } from "antd";
import OrderDetailsForm from "../forms/OrderDetailsForm";
import SelectPayment from "../forms/SelectPayment";
import { IdcardOutlined, CheckCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import ConfirmOrder from "../forms/ConfirmOrder";

const { Step } = Steps;

const PlaceOrder = ({setOpened}) => {
  const [formdata, setFormdata] = useState({ name: "", phone: "", address: "", payment: "cash" });
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  const handleOnChange = (values) => {
    console.log(formdata);
    setFormdata({
      ...formdata,
      ...values,
    });
  };
  const handleOnFinish = () => {
    console.log(formdata);
    message.success("Order Placed Successfully");
    setOpened(false);
  }

  const steps = [
    {
      title: "Fill Details",
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
  const { token } = theme.useToken();
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
