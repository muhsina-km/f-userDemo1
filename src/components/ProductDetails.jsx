import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseurl from "../Api";
import { Badge, Button, Col, Divider, Image, Modal, Row, Space, Tag, Typography, message, notification } from "antd";
import colorNames from "colornames";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SmallSlider from "./SmallSlider";
import AddToCart from "../popups/AddToCart";

const ProductDetails = () => {
  const { plantid } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Text, Title, Paragraph } = Typography;
  const [Plantdetailsview, setPlantdetailsview] = useState();
  const [similarproducts, setSimilarproducts] = useState([]);

  const fetchsimilarData = async (query) => {
    try {
      const name = query;
      const response = await axios.get(`${baseurl}/plantdetails/ptview/${name}`);
      console.log(response.data);
      setSimilarproducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
  if(Plantdetailsview){
      fetchsimilarData(Plantdetailsview.planttypeid);
    }
}, [Plantdetailsview]);

  useEffect(() => {
    // Fetch the details of the product with id
    axios
      .get(`${baseurl}/plantdetails/pview/${plantid}`)
      .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data[0]);
      })
      .catch((err) => console.log(err));
      
  }, [plantid]);

  if (!Plantdetailsview) {
    return <div>Loading...</div>; // You can customize the loading state
  }

  const handleAddToCart = () => {
    notification.open({
      type: 'success',
      message: 'Added to cart',
      placement: 'topLeft',
    })
    setIsModalVisible(false);
  }
  const handleBack = () => {
    window.location.href = '/home'
  }


  return (
    <div>
      {contextHolder}
      <Row gutter={16} style={{ margin: "50px" }}>
        <Col span={8}>
          <Image
            src={Plantdetailsview.plantphoto}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col span={12} style={{ marginBottom: '7px' }}>
          <h2>{Plantdetailsview.plantname}</h2>
          <Title level={4} type="secondary" strong>
            Price: ₹{Plantdetailsview.price}
          </Title>
          <Text type="primary" strong>Size:</Text><Text> {Plantdetailsview.size}</Text>
          <br />
          <br />
          <Text type="secondary">
            Color:{" "}</Text>
          <Tag
            style={{ color: 'black' }}
            size="large"
            color={colorNames(Plantdetailsview.color)
            }
          >
            {Plantdetailsview.color}
          </Tag>
          <br />
          <br />
          <Paragraph>Description: {Plantdetailsview.description}</Paragraph>
          <br />
          <Space>
            <Button type="primary" shape="round" size={"medium"}>
              Buy Now
            </Button>
            <Button type="primary" shape="round" size={"medium"} onClick={() => setIsModalVisible(true)}>
              Add to Cart
            </Button>
          </Space>
        </Col>
      </Row>
      {/* You can display other details of the product */}
      <Button onClick={handleBack}
      icon={<ArrowLeftOutlined />} size={"small"} style={{color:'black'}} >
        Back to Home
      </Button>
<Divider orientation="left"><h3>Similar Plants</h3></Divider>
      <SmallSlider products={similarproducts}></SmallSlider>
      <Modal
        footer={null}
        open={isModalVisible}
        ><AddToCart productId={plantid} onClose={() => setIsModalVisible(false)} addedToCart={handleAddToCart} /></Modal>
    </div>
  );
};

export default ProductDetails;
