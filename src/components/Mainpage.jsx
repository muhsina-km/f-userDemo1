import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollCards from './ScrollCards'
import { Button, Divider, Row } from 'antd'
import PlantCard from './PlantCard'
import PlanttypeCard from './PlanttypeCard'
import AboutPage from './AboutPage'

const Mainpage = () => {

    return (
        // <div style={{alignItems:'center', display:'flex'}} >
          <div style={{backgroundColor:'#FFF5F5'}}>
            <Navbar />
           <br /> <br />
           <Row>
          <Row style={{marginTop:"20px", marginBottom:"10px", }}>
           <ScrollCards/></Row>
           <br /> <br />
           <Divider orientation='left'><h3>Available Plant Categories</h3></Divider>
           <Row style={{marginBottom:'0px', marginTop:'0px', }}><PlanttypeCard/></Row>
           <br /> <br />
           <Divider orientation='left'><h3>Available Plants</h3></Divider>
           <Row style={{marginBottom:'0px', marginTop:'0px', }}><PlantCard/></Row>
           <br /> <br />
           <Divider orientation='left'> <h3 id='About'>About Us</h3>  </Divider>
           <Row style={{marginBottom:'0px', marginTop:'0px', }}><AboutPage/></Row>
          </Row>
            <Footer/>
        </div>
    )
}

export default Mainpage