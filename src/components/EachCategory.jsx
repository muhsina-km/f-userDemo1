import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, Button, Divider, Breadcrumb } from 'antd';
import Meta from 'antd/es/card/Meta';
import { motion } from 'framer-motion';
import NotFound from './NotFound';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../Api';
import { ArrowLeftOutlined } from '@ant-design/icons';

const EachCategory = () => {
  const navigate = useNavigate();
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


  return (
    <div style={{backgroundColor:'#FFF5F5', paddingTop:'4px'}}>
      <Navbar />
      {Plantdetailsview.length > 0 && (
        <>
       <Breadcrumb style={{ marginBottom: '-80px', marginTop: '100px',marginLeft:'50px' }}>
          <Breadcrumb.Item>
            <Link to='/home'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/categories'>Categories</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to=''>{category}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
          <Divider style={{ marginBottom: '-100px', marginTop: '100px' }} orientation='left'>
            <h2> {category} Plants </h2>
          </Divider>
          <div className='product-grid'>
            {Plantdetailsview.map((Plantdetailsview, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={animationCompleted ? { opacity: 1, y: 0 } : {}}
                transition={{type:'spring', delay: animationCompleted ? 0.1 * index : 0 }}
              >
                <Card
                  key={Plantdetailsview.id}
                  hoverable
                  style={{ width: 240, margin: '16px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px', }}
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
      <Footer />
    </div>
  );
};

export default EachCategory;
