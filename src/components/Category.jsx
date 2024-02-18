import React from 'react'
import Navbar from './Navbar'
import BottomNavbar from './BottomNavbar'

const Category = () => {
  return (
    <div>

     <Navbar/>
     <h1 style={{marginTop:'80px', textAlign:'center'}}> All Categories</h1>

     <BottomNavbar/>
    </div>
  )
}

export default Category