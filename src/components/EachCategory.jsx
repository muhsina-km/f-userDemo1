import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, Button, Divider } from 'antd';
import Meta from 'antd/es/card/Meta';
import { motion } from 'framer-motion';
import NotFound from './NotFound';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../Api';
import { ArrowLeftOutlined } from '@ant-design/icons';

const EachCategory = () => {
  const { category } = useParams();
  const [Plantdetailsview, setPlantdetailsview] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (category) {
      axios
        .get(baseurl + '/plantdetails/products/' + category)
        .then((response) => {
          console.log(response.data);
          if (response.data.length === 0) {
            setNothingFound(true);
          }
          setPlantdetailsview(response.data);
        })
        .catch((err) => console.log(err));
    }
    setAnimationCompleted(true);
  }, [ trigger,category ]);

  if (nothingFound) {
    return (
      <div>
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    );
  }

  const handleBack = () => {
    window.location.href = '/home'
  }


  return (
    <div>
      <Navbar />
      {Plantdetailsview.length > 0 && (
        <>
          <Divider style={{ marginBottom: '-100px', marginTop: '100px' }} orientation='left'>
            <h2> {category} Plants </h2>
          </Divider>
          <div className='product-grid'>
            {Plantdetailsview.map((Plantdetailsview, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: animationCompleted ? 0.1 * index : 0 }}
              >
                <Card
                  key={Plantdetailsview.id}
                  hoverable
                  style={{ width: 240, margin: '16px' }}
                  cover={<img alt='plant' src={Plantdetailsview.plantphoto} style={{ height: '150px', objectFit: 'cover' }} />}
                >
                  <Meta title={Plantdetailsview.plantname} />
                  <Meta title={`₹${Plantdetailsview.price}`} description={Plantdetailsview.size} />
                  <Link to={`/view/${Plantdetailsview.plantid}`}>
                    <Button type='primary' style={{ marginTop: '8px' }}>
                      Product Details
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      )}
               <div>
                <br />
      <Button onClick={handleBack}
      icon={<ArrowLeftOutlined />} size={"small"} style={{color:'black'}} >
        Back to Home
      </Button>
      </div>
      <Footer />
    </div>
  );
};

export default EachCategory;
