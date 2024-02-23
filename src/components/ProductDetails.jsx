import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import baseurl from "../Api";
import { Badge, Breadcrumb, Button, Col, Divider, Image, Modal, Row, Space, Tag, Typography, message, notification } from "antd";
import colorNames from "colornames";
import { ArrowLeftOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import SmallSlider from "./SmallSlider";
import AddToCart from "../popups/AddToCart";
import { addToWishlist, viewWishlist, removeFromWishlist, isInWishlist } from "../functions/wishlistApi";

const ProductDetails = () => {
  const { plantid } = useParams();
  const navigate = useNavigate();
  const [isInWishlisted, setIsInWishlist] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Text, Title, Paragraph } = Typography;
  const [Plantdetailsview, setPlantdetailsview] = useState();
  const [similarproducts, setSimilarproducts] = useState([]);

  //order
  const [isModalVisiblee, setIsModalVisiblee] = useState(false);

  const handleBuyNow = async (plantid) => {
    const userId = localStorage.getItem("user");
      try {
        const response = await 
        axios.post(`${baseurl}/order/place-order`, { userId, products: [plantid] });
        console.log(response.data);
        notification.success({ message: 'Order placed successfully', placement: 'topLeft' });
        setIsModalVisiblee(false);
      } catch (error) {
        console.error('Error placing order:', error);
        notification.error({ message: 'Error placing order', placement: 'topLeft' });
      }
  };


  const [wishlist, setWishlist] = useState([]);

  const user = localStorage.getItem("user");
  const userEmail = user ? JSON.parse(user).email : null;

  const handleAddToWishlist = async (plantid) => {
    try {
      await addToWishlist(userEmail, plantid);
      setWishlist([...wishlist, plantid]);
      setIsInWishlist(true);
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  };
  const handleRemoveFromWishlist = async (plantid) => {
    try {
      await removeFromWishlist(userEmail, plantid);
      setWishlist(wishlist.filter((id) => id !== plantid));
      setIsInWishlist(false);
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
      throw error;
    }
  };
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        console.log(await isInWishlist(userEmail, plantid));
        if (await isInWishlist(userEmail, plantid)) {
          setIsInWishlist(true);
        }
      }
      catch (error) {
        console.error('Error checking if plant is in wishlist:', error);
      }
  }
  fetchWishlist();
  }, [plantid, userEmail]);
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

//  const handleBuyNow = () => {
//    notification.open({
//      type: 'success',
//      message: 'Order Placed successfully',
//      description: 'Thank you for shopping with us',
//      placement: 'topLeft',
//    })
//  }


  return (
    <div>
      <Breadcrumb style={{ marginLeft:'60px', marginTop:'20px', marginBottom:'-30px' }}>
          <Breadcrumb.Item>
            <Link to='/home'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to=''>Product</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
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
            <Button type="primary" shape="round" size={"medium"} onClick={() => handleBuyNow()}>
              Buy Now
            </Button>
            <Button type="primary" shape="round" size={"medium"} onClick={() => setIsModalVisible(true)}>
              Add to Cart
            </Button>
            {isInWishlisted ? (
              <Button icon={<HeartFilled />} style={{color:'red'}} shape="round" size={"default"} onClick={() => handleRemoveFromWishlist(plantid)} />
            ):
            (<Button icon={<HeartOutlined />} shape="round" size={"default"} onClick={() => handleAddToWishlist(plantid)} />)}
          </Space>
        </Col>
      </Row>
      {/* You can display other details of the product */}
  
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
