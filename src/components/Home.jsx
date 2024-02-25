import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BottomNavbar from './BottomNavbar'
import Footer from './Footer'
import './Style.css'
import axios from 'axios'
import baseurl from '../Api'
import { Card, Button, Row } from 'antd';
import Meta from 'antd/es/card/Meta'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

const Home = () => {

  const [Plantdetailsview, setPlantdetailsview] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
    
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


  return (
    <div style={{backgroundColor:'#FFF5F5', paddingTop:'4px'}}>
      <Navbar/>
     
          <div className='product-grid'>
        {Plantdetailsview.map((Plantdetailsview,index) => (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
          transition={{type:'spring', delay: animationCompleted ? 0.1 * index : 0 }}
        >
          <Card
            key={Plantdetailsview.id}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt="plant" src={Plantdetailsview.plantphoto} style={{ height: '150px', objectFit: 'cover' }} />}
          >
            <Meta title={Plantdetailsview.plantname} />
            <Meta title={`₹${Plantdetailsview.price}`}  description={Plantdetailsview.size} />
            <Link to={`/view/${Plantdetailsview.plantid}`}>
            <Button type="primary" style={{ marginTop: '8px' }}>
              Product Details</Button> </Link>
          </Card></motion.div>
        ))}
    </div>
     <div>
      <BottomNavbar/>
     </div>
    <Footer />
    </div>
  )
}

export default Home
