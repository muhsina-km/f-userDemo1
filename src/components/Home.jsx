import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Style.css'
import axios from 'axios'
import baseurl from '../Api'
import { Card, Button } from 'antd';
import Meta from 'antd/es/card/Meta'

const Home = () => {

  var [Plantdetailsview, setPlantdetailsview] = useState([]);
  const [trigger, setTrigger] = useState(false);
    
  useEffect(() => {
    axios
      .get(baseurl + "/plantdetails/pview")
      .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  return (
    <div>
      <Navbar/>
     
          <div className='product-grid'>
        {Plantdetailsview.map((Plantdetailsview) => (
          <Card
            key={Plantdetailsview.id}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt="plant" src={Plantdetailsview.plantphoto} style={{ height: '150px', objectFit: 'cover' }} />}
          >
            <Meta title={Plantdetailsview.plantname} />
            <Meta title={`₹${Plantdetailsview.price}`}  description={Plantdetailsview.size} />
            <Button type="primary" style={{ marginTop: '8px' }}>Product Details</Button>
          </Card>
        ))}
    </div>
    
    <Footer/>
    </div>
  )
}

export default Home
