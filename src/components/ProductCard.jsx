import React from 'react';
import { Button, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
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
      <img src={imageUrl} style={{width: "100%",height: "100%", maxWidth: "100%", maxHeight: "100%",objectFit: "cover" }} />
    </div>
    
  }
    actions={[
        <Link to={`/view/${id}`} onClick={handleLinkClick}><Button type="primary" icon={<EyeOutlined />}>
        View
      </Button></Link>
    ]}
  >
    <Meta
      title={productName}
    />
  </Card>
);

export default ProductCard;
