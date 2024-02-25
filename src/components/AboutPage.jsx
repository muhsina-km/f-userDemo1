import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import redrose from '../assets/flowerred3d.webp'
import shop from '../assets/flowershop.webp'
import { Col, Row } from 'antd';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{ margin: '50px' }}
    >
      <Fade triggerOnce>
        <h2>Welcome to BloomingBuds - Where Nature Meets Elegance</h2>
      </Fade>
      <Row>
        <Col span={6}>
      <img src={redrose} style={{ width: '250px' }} alt="flower" />
      </Col>
      <Col span={12}>
      <Fade delay={100} triggerOnce>
        <p style={{marginTop: '70px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5',fontFamily: 'sans-serif' }}>At BloomingBuds, we don't just sell flowering plants; we cultivate moments of joy, beauty, and connection. 
        Our journey began with a simple love for nature and a dream to bring the serenity of blooming flowers into 
        every home. Today, we proudly present an online platform that celebrates the artistry of nature and the 
        enchanting world of flowering plants.</p>
      </Fade>
      </Col>
      </Row>
      
      <Fade delay={200} triggerOnce>
        <Row>
        <Col span={14}><h2>Our Story</h2>
        <p style={{marginRight: '20px',marginTop: '20px', textAlign: 'justify', fontSize: '18px', lineHeight: '1.5',fontFamily: 'sans-serif' }}>Our story is rooted in a passion for plants and a desire to share their magic with the world. It all started 
        with a handful of seeds and a vision to create a space where the beauty of nature could be cherished and enjoyed. 
        BloomingBuds was born out of this dream, growing from a small seedling of an idea to a flourishing online marketplace.</p>
      </Col>
      <Col span={6}>
      <img src={shop} style={{ width: '250px' }} alt="flower" />
      </Col></Row></Fade>
      <Fade delay={300} triggerOnce>
        <h4>Meet the Founders</h4>
        <p>Hi there! We are Anagha, Anuja and Muhsina, the dreamers behind BloomingBuds. Our journey began as plant enthusiasts, 
        and today, we are on a mission to make the world a greener and more vibrant place. With a team that shares our love for plants, 
        we've created a welcoming space where every visit feels like a stroll through a botanical garden.</p>
      </Fade>
    <Fade delay={400} triggerOnce>
      <h4>Our Commitment</h4>
    </Fade>
    <Fade delay={500} triggerOnce>
<p>At BloomingBuds, we believe in more than just selling plants; we believe in fostering a community that appreciates the magic 
of nature. Our commitment extends beyond delivering exquisite flowering plants – it's about providing an experience that brings 
joy, relaxation, and a touch of elegance to your life.</p>
</Fade>
<Fade delay={600} triggerOnce>
<h4>The Blooming Experience</h4>
</Fade>
<Fade delay={700} triggerOnce>
<p>Explore our carefully curated collection of flowering plants, each chosen for its unique beauty and character. From radiant 
roses to graceful orchids, our selection reflects the diversity and splendor of the floral world. Whether you're a seasoned 
plant enthusiast or a beginner, BloomingBuds is here to inspire and guide you on your journey with nature.</p>
</Fade>
<Fade delay={800} triggerOnce>
<h4>Sustainability Matters</h4>
</Fade>
<Fade delay={900} triggerOnce>
<p>We are proud to embrace sustainability in everything we do. Our plants are sourced responsibly, and our packaging is eco-friendly. 
We believe in nurturing the planet as much as we nurture our plants. Join us in our commitment to making conscious choices for a 
greener future.</p>
</Fade>
<Fade delay={1000} triggerOnce>
<h4>Let's Grow Together</h4>
</Fade>
<Fade delay={1100} triggerOnce>
<p>Thank you for being a part of the BloomingBuds family. Together, let's celebrate the beauty of nature, one blossom at a time. 
Explore our online garden, find the perfect flowering companion, and let the BloomingBuds experience unfold in your home.</p>
</Fade>

      <Fade delay={1200} triggerOnce>
        <h2>Welcome to BloomingBuds – Where Every Bloom Tells a Story.</h2>
      </Fade>
    </motion.div>
  );
}

export default AboutPage;
