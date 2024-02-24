import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BottomNavbar from './BottomNavbar'
import Footer from './Footer'
import './Style.css'
import axios from 'axios'
import baseurl from '../Api'
import { Card, Button, Row, Breadcrumb } from 'antd';
import Meta from 'antd/es/card/Meta'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

const WishList = () => {

  const [Plantdetailsview, setPlantdetailsview] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
const user = localStorage.getItem("user")
const email = user ? JSON.parse(user).email : null;
  useEffect(() => {
    axios
      .get(baseurl + "/wishlist/view-wishlist", {
        params: {
          email,
        }
      })
      .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data.wishlist);
      })
      .catch((err) => console.log(err));
    
    setAnimationCompleted(true);
  }, [trigger]);


  return (
    <div style={{backgroundColor:'#FFF5F5'}}>
      <Navbar/>
      <Breadcrumb style={{ marginLeft:'60px', marginTop:'100px', marginBottom:'-80px' }}>
          <Breadcrumb.Item>
            <Link to='/home'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to=''>wishlist</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
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
      <BottomNavbar nowin="wishlist"/>
     </div>
    <Footer />
    </div>
  )
}

export default WishList
