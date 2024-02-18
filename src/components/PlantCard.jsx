import { Button } from '@mui/material'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = () => {
  return (

    <div>
      <Button component={Link} to="/home"
      style={{ color: 'black', marginLeft: '1120px', }}>
        View All</Button>

    <div
    style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="plant" src="https://i.pinimg.com/564x/10/ac/22/10ac22c5a19469f04ae2bbd0245ccdb4.jpg"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Phalaenopsis amabilis Orchid" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="plant" src="https://i.pinimg.com/564x/78/96/cc/7896cc73e6a6e42fa2d3216a53368269.jpg"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Catalina Grandiflora Rose" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="plant" src="https://i.pinimg.com/736x/c1/ad/48/c1ad485aeefcc2cdfa23c3150c1fcf46.jpg"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Hawaiian Hibiscus" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="plant" src="https://i.pinimg.com/564x/11/7c/03/117c031f420a4926db5a5f40e52d9d87.jpg"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Acropolis Tulip" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="plant" src="https://i.pinimg.com/564x/1d/2d/34/1d2d34351b3ad95a7df7862807ed78cb.jpg"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Easter Parade Bougainvillea" style={{ textAlign: 'center' }} />
      </Card>

    </div>
    </div>
  )
}

export default PlantCard
