import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}> 
        <Toolbar>
          <LocalFloristIcon sx={{
            fontSize:26, color:'#000000'}}/> &nbsp;
          <Typography
            variant='h6'
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Cursive',
              color: '#000000',
              fontSize: '26px',
            }}
          >
            <b>BloomingBuds</b>
          </Typography>

          <Box sx={{ flexGrow: 10, display: 'flex', justifyContent: 'center', gap: '18px', color:'#000000' }}>
            <Typography style={{fontSize:'14px'}} component={Link} to="/">
              HOME</Typography>
            <Typography style={{fontSize:'14px'}} component={Link} to="/home">
              SHOP</Typography>
            <Typography style={{fontSize:'14px'}} component={Link} to="/about">
              ABOUT</Typography>
          </Box>

          <Button component={Link} to="/login"
          sx={{ fontSize:12, color:'#000000'}}>
          Login</Button>
          <Button component={Link} to="/register"
          sx={{ fontSize:12, color:'#000000'}}>
          Signin</Button>
        </Toolbar> 
       </AppBar>
    </Box>
    </div>
  );
}

export default Navbar