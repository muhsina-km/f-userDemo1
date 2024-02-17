import React from 'react';
import { Button, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ProductCard = ({ id,productName, imageUrl,ofPrice,orPrice }) => (
  <Card
    style={{
      width: 150,
    }}
    cover={
      <div style={{ width: "150px", height: "150px" }}>
      <img src={imageUrl} style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto", objectFit: "cover" }} />
    </div>
    
  }
    actions={[
        <Link to={`/category/${productName}`} onClick={handleLinkClick}><Button type="primary" icon={<SearchOutlined></SearchOutlined>}>
        See More
      </Button></Link>
    ]}
  >
    <Meta
      title={productName}
    />
  </Card>
);

export default ProductCard;
