import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import redrose from '../assets/flowerred3d.webp'
import shop from '../assets/plantshop.webp'
import delivery from '../assets/delivery.png'
import plant from '../assets/plant.png'
import echo from '../assets/echo.png'
import thanku from '../assets/thankyou.webp'
import { Col, Divider, Row } from 'antd';
import Navbar from './Navbar';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { speed } from 'jquery';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <ParallaxProvider>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{ margin: '50px',marginLeft:'200px' }}
    >
      <Divider orientation='left' style={{ marginTop: '70px' }}> <h3 id='About'>About Us</h3>  </Divider>
      <Fade triggerOnce>
        <h2>Welcome to BloomingBuds - Where Nature Meets Elegance</h2>
      </Fade>
      <Row>
        <Col span={6}>
          <Parallax translateX={[-40, 0]} rotate={[10, -10]} scale={[1.2,1, 0.7]}>
          <img src={redrose} style={{ width: '250px' }} alt="flower" />
          </Parallax>
        </Col>
        <Col span={12}>
          <Fade delay={100} triggerOnce>
            <p style={{ marginTop: '70px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>At BloomingBuds, we don't just sell flowering plants; we cultivate moments of joy, beauty, and connection.
              Our journey began with a simple love for nature and a dream to bring the serenity of blooming flowers into
              every home. Today, we proudly present an online platform that celebrates the artistry of nature and the
              enchanting world of flowering plants.</p>
          </Fade>
        </Col>
      </Row>

      <Fade delay={200} triggerOnce>
        <Row>
          <Col span={14}><h2>Our Story</h2>
            <p style={{ marginRight: '20px', marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>Our story is rooted in a passion for plants and a desire to share their magic with the world. It all started
              with a handful of seeds and a vision to create a space where the beauty of nature could be cherished and enjoyed.
              BloomingBuds was born out of this dream, growing from a small seedling of an idea to a flourishing online marketplace.</p>
          </Col>
          <Col span={6}>
          <Parallax translateX={[30, 0]} rotate={[10, 0, 0]} scale={[1.2, 1]}>
            <img src={shop} style={{ width: '250px' }} alt="flower" />
            </Parallax>
          </Col></Row></Fade>

      <Fade delay={400} triggerOnce>
        <Row>
          <Col span={6}>
          <Parallax translateX={[-40, 0]} rotate={[-20, 0]} scale={[1.2, 1]}>
            <img src={delivery} style={{ width: '250px' }} alt="flower" />
            </Parallax>
          </Col>
          <Col span={14}><h2>Our Commitment</h2>
            <p style={{ marginRight: '20px', marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>
              At BloomingBuds, we believe in more than just selling plants; we believe in fostering a community that appreciates the magic
              of nature. Our commitment extends beyond delivering exquisite flowering plants – it's about providing an experience that brings
              joy, relaxation, and a touch of elegance to your life.</p>
          </Col>
          </Row></Fade>

          <Fade delay={400} triggerOnce>
        <Row>
          <Col span={14}><h2>The Blooming Experience</h2>
            <p style={{ marginRight: '20px', marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>
            Explore our carefully curated collection of flowering plants, each chosen for its unique beauty and character. From radiant
          roses to graceful orchids, our selection reflects the diversity and splendor of the floral world. Whether you're a seasoned
          plant enthusiast or a beginner, BloomingBuds is here to inspire and guide you on your journey with nature.</p>
          </Col>
          <Col span={6}>
          <Parallax translateX={[30, 0]} rotate={[10, 0, 0]} scale={[1.2, 1]}>
            <img src={plant} style={{ width: '250px' }} alt="flower" />
            </Parallax>
          </Col></Row></Fade>

          <Fade delay={400} triggerOnce>
        <Row>
          <Col span={6}>
          <Parallax translateX={[-40, 0]} rotate={[-50, 0]} scale={[0.8, 1]}>
            <img src={echo} style={{ width: '250px' }} alt="flower" />
            </Parallax>
          </Col>
          <Col span={14}><h2>Sustainability Matters</h2>
            <p style={{ marginRight: '20px', marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>
            We are proud to embrace sustainability in everything we do. Our plants are sourced responsibly, and our packaging is eco-friendly.
          We believe in nurturing the planet as much as we nurture our plants. Join us in our commitment to making conscious choices for a
          greener future.</p>
          </Col>
          </Row></Fade>

          <Fade delay={400} triggerOnce>
        <Row>
          <Col span={14}><h2>Let's Grow Together</h2>
            <p style={{ marginRight: '20px', marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5', fontFamily: 'sans-serif' }}>
            Thank you for being a part of the BloomingBuds family. Together, let's celebrate the beauty of nature, one blossom at a time.
          Explore our online garden, find the perfect flowering companion, and let the BloomingBuds experience unfold in your home.</p>
          </Col>
          <Col span={6}>
          <Parallax translateX={[30, 0]} rotate={[30, 0, 0]} scale={[1.2, 1]}>
            <img src={thanku} style={{ width: '220px' }} alt="flower" />
            </Parallax>
          </Col></Row></Fade>

      <Fade delay={400} triggerOnce>
        <h2>Welcome to BloomingBuds – Where Every Bloom Tells a Story.</h2>
      </Fade>
    </motion.div>
    </ParallaxProvider>
    </div>
  );
}

export default AboutPage;
