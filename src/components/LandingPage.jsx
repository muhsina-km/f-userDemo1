import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedFlower from './AnimatedFlower';

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
      }, 2500);
    };

    animateOnLoad();
  }, [textAnimation, flowerAnimation, navigate]);

  return (
    <AnimatedFlower />
  );
};

export default LandingPage;
