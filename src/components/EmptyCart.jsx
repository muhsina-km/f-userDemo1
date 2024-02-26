import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import notfound from '../assets/notfound2.json'
import { Button, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Refresh } from '@mui/icons-material'

const EmptyCart = () => {
    const navigate = useNavigate()

    const handleClick = () => {
     navigate('/home')
    }

  return (
    <div style={{backgroundColor:'#FFF5F5', paddingTop:'4px'}}>
        <Row style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', height: '100vh',width:'100vw' }}>
            <Col span={24} >
        <Player
        style={{ height: '300px', width: '300px',marginTop: '25px', marginBottom: '-20px' }}
        autoplay
        src="https://lottie.host/65160ddb-f478-4c86-9b0b-042ffdc80d29/2aySQl9xEv.json"
        loop
        ></Player><h1 style={{color:'#ED5945'}}>Cart is Empty</h1></Col>
        <Button style={{marginTop: '-200px'}} type="primary" danger onClick={handleClick} >Go Back</Button>
        </Row>
        </div>
  )
}

export default EmptyCart