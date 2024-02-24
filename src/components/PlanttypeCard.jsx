import React, { useEffect, useState } from 'react'
import './Style.css'
import axios from 'axios'
import baseurl from '../Api'
import { Card, Button, Row } from 'antd';
import Meta from 'antd/es/card/Meta'
import { useNavigate } from 'react-router-dom'

const PlantCard = () => {

  const [Ptype, setPtype] = useState([]);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseurl + '/planttype/ptview')
      .then((response) => {
        console.log(response.data);
        setPtype(response.data);
      })
      .catch((err) => console.log(err));
    setAnimationCompleted(true);
  }, []);

  const DisplayProducts = Ptype.slice(0, 4);

 const ViewAll = () => {
  navigate('/home');
 }

  return (
    <div>
     <Button type="text" style={{ marginLeft: '1120px', marginTop: '-40px', }} 
     onClick={ViewAll}>
        VIEW ALL</Button>

      <div className='product-grid'
    style={{ display: 'grid', justifyContent: 'center', padding: '10px',marginTop:'0px' }}>

          {DisplayProducts.map((Ptype, index) => (
            <Card
              key={Ptype.id}
              hoverable
              style={{ width: 240, margin: '16px' }}
              cover={<img alt="plant" src={Ptype.Planttypephoto} style={{ height: '150px', objectFit: 'cover' }} />}
            >
              <Meta style={{textAlign:'center'}} title={Ptype.Planttype} />
              <Button type="primary" style={{ marginTop: '8px', marginLeft: '60px' }}>
                View</Button>
            </Card>
          ))}
      </div>
     </div>
  )
}

export default PlantCard
