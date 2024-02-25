import React from 'react';
import Flower from '../assets/animatedflower2.gif'
import AnimatedTextCharacter from './AnimatedTextCharacter';
const AnimatedFlower = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#FFF4F4',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <img style={{ width: '250px' }} src={Flower} alt="Animated Flower" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <AnimatedTextCharacter text={"BloomingBuds"} />
      </div>
    </div>
  );
};

export default AnimatedFlower;
