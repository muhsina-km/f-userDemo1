import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const PlantCard = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
       <Card
            hoverable
            style={{ width: 240}}
            cover={<img alt="plant" src="https://i.pinimg.com/236x/31/2c/bf/312cbf04d2142ae2861f543e40415ee1.jpg" style={{ height: '150px', objectFit: 'cover' }} />}
          >
            <Meta title="Lily"/>
          </Card>
    </div>
  )
}

export default PlantCard
