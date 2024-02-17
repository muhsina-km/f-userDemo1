import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProductCard from './ProductCard';

const SmallSlider = ({ products }) => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  return (
    <Splide
    style={{ marginBottom: "100px"}}
      options={{
        perPage: isMobile ? 2 : 6,
        rewind: true,
        gap: '0.2rem',
      }}
      aria-label="My Favorite Images"
    >
      {products.map((product, index) => (
        <SplideSlide key={index} style={index === 0 ? { marginLeft: '30px' } : undefined}>
          <ProductCard id={product.plantid} productName={product.plantname} imageUrl={product.plantphoto} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SmallSlider;
