import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// const contentStyle = {
//   width: '80%',
//   // display: 'flex',
//   // flexDirection: 'row',
//   // justifyContent: 'center',
//   // alignItems: 'center',
// };

const imgstyle = {
  width: '100%',
  maxHeight: "400px",
  marginTop: '10px',
  borderRadius: '10px',
  objectFit: 'cover'
}

const splidestyle = { aspectRatio: '9/16', objectFit: 'contain',maxHeight:"370px"}

const ScrollCards = () => (
   
  <div>
  <Splide options={{
    width: '100%',
    height:"50%",
    // autoWidth: true,
    rewind: true,
    perPage: 2,
    gap: '1rem',
    arrows: false,
    // perMove: 1,
    pagination: true,
  }}
  // style={{background: 'white'}}
  >

    <SplideSlide style={splidestyle}>
      <img src="https://img.freepik.com/premium-photo/top-view-bouquet-pink-roses-with-copy-space_23-2148268370.jpg?w=740" 
      style={imgstyle} />
      <div className='imgoverlay-text'>
        <h3 style={{color:'#F3ABB6', marginRight:'200px', marginLeft:'-240px', marginTop:'-60px'}}>Search for best complement to your Home</h3>
      </div>
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://i.pinimg.com/564x/27/35/51/27355185df0ae864aeb22fa6b4bf55b1.jpg" 
      style={imgstyle} />
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://i.pinimg.com/564x/12/d6/6a/12d66a7ef7706cce9c3f9049c2cf72ad.jpg" 
      style={imgstyle} />
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://img.freepik.com/premium-photo/minimalist-sunflower-beauty-clear-copy-potential_905683-121000.jpg?w=740" 
      style={imgstyle} />
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://image.freepik.com/free-photo/flowers-composition-with-gift-box-made-rose-flowers-white-background_73324-323.jpg" 
      style={imgstyle} />
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://i.pinimg.com/564x/6a/88/ac/6a88acc6aeba64340c28beceedb6e15f.jpg" 
      style={imgstyle} />
    </SplideSlide>
    
  </Splide>
  </div>
);

export default ScrollCards;