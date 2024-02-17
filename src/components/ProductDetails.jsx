import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseurl from "../Api";
import { Badge, Col, Image, Row, Tag, Typography } from "antd";
import colorNames from "colornames";

const ProductDetails = () => {
  const { plantid } = useParams();
  const { Text, Title, Paragraph } = Typography;
  const [Plantdetailsview, setPlantdetailsview] = useState();

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

  return (
    <div>
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
        <Col span={12} style={{marginBottom:'7px'}}>
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
            style={{color:'black'}}
              size="large"
              color={colorNames(Plantdetailsview.color)
              }
            >
              {Plantdetailsview.color}
            </Tag>
          <br />
          <br />
          <Paragraph>Description: {Plantdetailsview.description}</Paragraph>
        </Col>
      </Row>
      {/* You can display other details of the product */}
    </div>
  );
};

export default ProductDetails;
