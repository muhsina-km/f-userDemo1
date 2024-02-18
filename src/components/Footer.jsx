import React from 'react'
import './Style.css'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Flex, Tooltip, Typography } from 'antd';
import { Box } from '@mui/material';

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