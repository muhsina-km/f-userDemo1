import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Style.css'

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
   
  <div style={{marginLeft:'10px',marginTop:'10px'}}>
  <Splide
  transition={'ease-in-out'}
  options={{
    easing: 'ease-in-out',
    easingFunc: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    width: '100%',
    height:"50%",
    interval: 2800,
    rewind: true,
    perPage: 2,
    gap: '1rem',
    arrows: false,
    // perMove: 1,
    autoplay: true,
    pagination: true,
  }}
  // style={{background: 'white'}}
  >

    <SplideSlide style={splidestyle}>
      <img src="https://img.freepik.com/premium-photo/top-view-bouquet-pink-roses-with-copy-space_23-2148268370.jpg?w=740" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#F3ABB6', marginRight:'200px', marginLeft:'-240px', marginTop:'-60px'}}>
          Search for best complement to your Home</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://i.pinimg.com/564x/27/35/51/27355185df0ae864aeb22fa6b4bf55b1.jpg" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#FFBF7D', marginRight:'0px', marginLeft:'5px', marginTop:'-110px'}}>
         Embrace the bloom of Life</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://i.pinimg.com/564x/12/d6/6a/12d66a7ef7706cce9c3f9049c2cf72ad.jpg" 
      style={imgstyle} />

       {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#D562BE', marginRight:'0px', marginLeft:'-15px', marginTop:'10px'}}>
         Celebrate the beauty of each Petals</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://img.freepik.com/premium-photo/minimalist-sunflower-beauty-clear-copy-potential_905683-121000.jpg?w=740" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#FEC300', marginRight:'150px', marginLeft:'-260px', marginTop:'-85px'}}>
        Blossom with us at BloomingBuds-
        Flowers are momemts wrapped in Petals</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://image.freepik.com/free-photo/flowers-composition-with-gift-box-made-rose-flowers-white-background_73324-323.jpg" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#D80032', marginRight:'0px', marginLeft:'15px', marginTop:'-20px'}}>
        Awaken your senses with the Beauty of Blooms</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://img.freepik.com/free-photo/single-light-pink-gerbera-daisy-flower-gray-background_53876-142959.jpg?t=st=1707923110~exp=1707923710~hmac=651fcb3fbd253393473275c04d527d2033dbe6120313aa289decdaf17410bb96" 
      style={imgstyle} />
      
      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#E981A4', marginRight:'0px', marginLeft:'-260px', marginTop:'-110px'}}>
        Elavate your moments with grace of Flowers</h3>
      </div> */}
    </SplideSlide>
    
  </Splide>
  </div>
);

export default ScrollCards;