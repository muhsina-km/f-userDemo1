import React from 'react'
import './Style.css'

const Footer = () => {
  return (
    <div className='footer'>

       <h4>
         &copy; BloomingBuds {new Date().getFullYear()}
       </h4>
    </div>
  )
}

export default Footer