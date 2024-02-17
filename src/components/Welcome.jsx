import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Fade , JackInTheBox } from "react-awesome-reveal";

const Welcome= () => {
  return (

    <div>

      <center>

        <h1 style={{ fontFamily: 'Cursive ', color: '#000000',marginTop: '1px' }}>BloomingBuds</h1>

        <Fade delay={1e3} cascade damping={1e-1} 
        style={{ fontFamily: 'Lucida Handwriting ', color: '#000000', fontSize: "1.20em", fontWeight: "bolder"}}>
        Blossom Every Moment with BloomingBuds
        </Fade>

        <lord-icon
          src="https://cdn.lordicon.com/dyfotzbb.json"
          trigger="loop"
          delay="1500"
          stroke="light"
          state="in-reveal"
          colors="primary:#000000,secondary:#000000"
          style={{ width: '150px', height: '150px' }}
        >
        </lord-icon>

        {/* <br />
        <Link to="/login"
          style={{ color: 'white' }}
          hoverable>
          <Button variant="text" color='inherit'>LOGIN</Button>
        </Link> */}

      </center>

    </div>

  )
}

export default Welcome