import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProductCard from './ProductCard';

const SmallSlider = ({ products }) => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  return (
    <Splide
      options={{
        perPage: isMobile ? 2 : 5,
        rewind: true,
        gap: '1rem',
      }}
      aria-label="My Favorite Images"
    >
      {products.map((product, index) => (
        <SplideSlide key={index}>
          <ProductCard productName={'hello'} imageUrl={product.imageUrl} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SmallSlider;
