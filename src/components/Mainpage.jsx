import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollCards from './ScrollCards'
import { Button, Divider, Row } from 'antd'
import PlantCard from './PlantCard'
import PlanttypeCard from './PlanttypeCard'

const Mainpage = () => {

    return (
        // <div style={{alignItems:'center', display:'flex'}} >
          <div>
            <Navbar />
           <br /> <br />
           <Row>
          <Row style={{marginTop:"20px"}}>
           <ScrollCards/></Row>
           <br /> <br />
           <Divider orientation='left'><h3>Available Plant Types</h3></Divider>
           <Row style={{marginBottom:'0px', marginTop:'0px', }}><PlanttypeCard/></Row>
           <br /> <br />
           <Divider orientation='left'><h3>Available Plants</h3></Divider>
           <Row style={{marginBottom:'100px'}}><PlantCard/></Row>
          </Row>
            <Footer/>
        </div>
    )
}

export default Mainpage