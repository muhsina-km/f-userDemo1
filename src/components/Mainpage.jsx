import React from 'react'
import Navbar from './Navbar'
import ScrollCards from './ScrollCards'
import { Button, Divider, Row } from 'antd'
import PlantCard from './PlantCard'

const Mainpage = () => {

    return (
        <div style={{alignItems:'center', display:'flex'}}>
            <Navbar />
           <br /> <br />
          <Row>
          <Row style={{marginTop:"10vh"}}>
           <ScrollCards/></Row>
           <br /> <br />
           <Divider orientation='left'><h3>Available Plant Types</h3></Divider>
           <Row style={{marginBottom:'100px'}}><PlantCard/></Row>
          </Row>
        </div>
    )
}

export default Mainpage