import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const contentStyle = {
  width: '80%',
  // display: 'flex',
  // flexDirection: 'row',
  // justifyContent: 'center',
  // alignItems: 'center',
};
const imgstyle = {
  width: '100%',
  maxHeight: "100%",
  marginTop: '10px',
  borderRadius: '10px',
  objectFit: 'cover'
}

const splidestyle = { aspectRatio: '9/16', objectFit: 'contain',maxHeight:"370px" }

const ScrollCards = () => (
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
      <img src="https://i.pinimg.com/236x/53/a7/87/53a78767fdbdf05820fb521e566b51a3.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide style={splidestyle}>
      <img src="https://i.ibb.co/D1MTWm2/productivity.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide style={splidestyle}>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide style={splidestyle}>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
    <SplideSlide style={splidestyle}>
      <img src="https://i.ibb.co/P64h0cM/IMG-20240211-235057-798.jpg" style={imgstyle} />
    </SplideSlide>
  </Splide>
);

export default ScrollCards;