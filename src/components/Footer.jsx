import React from 'react'
import './Style.css'

const Footer = () => {
  return (
    <div className='footer'>
       <h5>
         <b> &copy; BloomingBuds {new Date().getFullYear()}</b>
       </h5>
    </div>
  )
}

export default Footer