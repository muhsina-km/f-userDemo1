import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const textAnimation = useAnimation();
  const flowerAnimation = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    const animateOnLoad = async () => {
      await textAnimation.start({ opacity: 1, y: 0 });
      await flowerAnimation.start({ opacity: 1, scale: 1 });
      // Set a timeout for 2 seconds (adjust the time as needed)
      setTimeout(() => {
        // Redirect to the main page
        navigate('/mainpage'); // Replace with the actual path
      }, 2000);
    };

    animateOnLoad();
  }, [textAnimation, flowerAnimation, navigate]);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={textAnimation}
        transition={{ duration: 1 }}
      >
        BloomingBuds
      </motion.h1>
      <motion.img
        src="https://cdn4.iconfinder.com/data/icons/flowers-vol-1/256/42-512.png"
        alt="flower"
        style={{ width: '80px', height: '80px', opacity: 0, marginTop: '20px' }}
        animate={flowerAnimation}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default LandingPage;
