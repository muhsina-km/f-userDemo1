import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import notfound from '../assets/notfound.json'
import { Button, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Row style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', height: '100vh',width:'100vw' }}>
            <Col span={24} >
        <Player
        style={{ height: '300px', width: '300px',marginTop: '25px', marginBottom: '-20px' }}
        autoplay
        src={notfound}
        loop
        ></Player><h1 style={{color:'#1CC9BE'}}>No Results Found</h1></Col>
        <Button style={{marginTop: '-200px'}} type="primary" onClick={() => navigate(-1)}>Go Back</Button>
        </Row>
        </div>
  )
}

export default NotFound