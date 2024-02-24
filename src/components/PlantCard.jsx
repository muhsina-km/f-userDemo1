import React, { useEffect, useState } from 'react'
import './Style.css'
import axios from 'axios'
import baseurl from '../Api'
import { Card, Button, Row } from 'antd';
import Meta from 'antd/es/card/Meta'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons';

const PlantCard = () => {

  const [Plantdetailsview, setPlantdetailsview] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseurl + "/plantdetails/pview")
      .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data);
      })
      .catch((err) => console.log(err));

    setAnimationCompleted(true);
  }, [trigger]);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const DisplayProducts = Plantdetailsview.slice(0, 4);

  const ViewAll = () => {
    navigate('/home');
  }

  return (
    <div>
      <Button type="text" style={{ marginLeft: '1120px', marginTop: '-40px', }}
        onClick={ViewAll}>
        VIEW ALL</Button>

      <div className='product-grid'
        style={{ display: 'grid', justifyContent: 'center', padding: '10px', marginTop: '0px' }}>

        {DisplayProducts.map((Plantdetailsview, index) => (
          <Card
            key={Plantdetailsview.id}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt="plant" src={Plantdetailsview.plantphoto} style={{ height: '150px', objectFit: 'cover' }} />}
          >
            <Meta title={Plantdetailsview.plantname} />
            <Link to={`/view/${Plantdetailsview.plantid}`}
              onClick={handleLinkClick}>
              <Button type="primary" icon={<EyeOutlined />}
                style={{ marginTop: '8px' }}>
                Product Details
              </Button></Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PlantCard
