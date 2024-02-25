import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Input } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UserDetails from './UserDetails';

const Navbar = () => {

  const { Search } = Input;
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('user')));
  const [userDetailsVisible, setUserDetailsVisible] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  const onSearch = (value) => {
    console.log(value)
    navigate(`/search/${value}`)
  }

  const handleProfileClick = () => {
    if (userProfile) {
      setUserDetailsVisible(true)
    }   
  };

  const handleCloseUserDetails = () => {
    setUserDetailsVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserProfile(null);
    setUserDetailsVisible(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#ED5945',boxShadow: 'none' }}>
          <Toolbar>
            <LocalFloristIcon sx={{
              fontSize: 26, color: '#FFFFFF'
            }} /> &nbsp;
            <Typography
              variant='h6'
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'Cursive',
                color: '#FFFFFF',
                fontSize: '26px',
              }}
            >
              <b>BloomingBuds</b>
            </Typography>
            &nbsp; &nbsp; &nbsp;
            <Search
              placeholder="Search for plants"
              onSearch={onSearch}
              style={{
                width: 250,
              }}
            />

            <Box sx={{ flexGrow: 6, display: 'flex', justifyContent: 'center', gap: '18px' }}>
              <Button type='text' style={{ fontSize: '14px', color: '#FFFFFF' }} component={Link} to="/" onClick={scrollToTop}>
                HOME</Button>
              <Button type='text' style={{ fontSize: '14px', color: '#FFFFFF' }} component={Link} to="/home" onClick={scrollToTop}>
                SHOP</Button>
              <ScrollLink to="About" smooth={true} duration={500}>
                <Button  type='text' style={{ fontSize: '14px', cursor: 'pointer', color: '#FFFFFF' }} component={Link} to="/about">
                  ABOUT</Button></ScrollLink>
              &nbsp; &nbsp; &nbsp;
              <Button style={{ fontSize: '14px' }} component={Link} to="/cart">
                <ShoppingCartIcon sx={{
                  fontSize: 20, color: '#FFFFFF'
                }} /></Button>
                </Box>

                {userProfile ? (
        <Avatar onClick={handleProfileClick}>
          {userProfile.email.charAt(0)}
        </Avatar>
              ) : (
                <>
                  <Button component={Link} to="/login" sx={{ fontSize: 12, color: '#FFFFFF' }}>
                    Login
                  </Button>
                  <Button component={Link} to="/register" sx={{ fontSize: 12, color: '#FFFFFF' }}>
                    Signin
                  </Button>
                </>
              )}

              <UserDetails
              visible={userDetailsVisible}
              userDetails={userProfile}
              onClose={handleCloseUserDetails}
              onLogout={handleLogout}/>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar