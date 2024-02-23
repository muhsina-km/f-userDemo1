import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import { Card, Button, Divider, Breadcrumb } from 'antd';
import Meta from 'antd/es/card/Meta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../Api';

const Category = () => {
  const [Ptype, setPtype] = useState([]);
  const [animationCompleted, setAnimationCompleted] = useState(false);

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


  return (
    <div>
      <Navbar />
      <Breadcrumb style={{ marginBottom: '-80px', marginTop: '100px',marginLeft:'50px' }}>
          <Breadcrumb.Item>
            <Link to='/home'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/categories'>Categories</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      <div className='product-grid'>
        {Ptype.map((Ptype, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: animationCompleted ? 0.1 * index : 0 }}
          >
            <Card
              key={Ptype.id}
              hoverable
              style={{ width: 240, margin: '16px' }}
              cover={<img alt='plant' src={Ptype.Planttypephoto} style={{ height: '180px', objectFit: 'cover' }} />}
            >
              <Meta title={Ptype.Planttype} style={{ textAlign: 'center' }} />
              <Link to={`/products/${Ptype.Planttype}`}>
                <Button type="primary" style={{ marginTop: '8px' }}>
                  Explore Products
                </Button>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
      <div>
        <BottomNavbar />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
