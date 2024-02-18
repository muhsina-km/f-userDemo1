import React from 'react'
import './Style.css'
import Navbar from './Navbar'
import BottomNavbar from './BottomNavbar'
import { Button } from '@mui/material'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

const Category = () => {
  return (
    <div>

     <Navbar/>
     <h1 style={{marginTop:'80px', textAlign:'center'}}> All Categories</h1>

     <div className='categ-grid'
    style={{ display: 'grid', justifyContent: 'center', padding: '10px', marginBottom: '100px' }}>

      <Card
        hoverable
        style={{ width: 240, margin: '16px' }}
        cover={<img alt="plant" src="https://img.freepik.com/free-photo/close-up-blooming-lilies_1160-235.jpg?w=996&t=st=1707825094~exp=1707825694~hmac=ff02b298878204dd0651fabd4cbb7a6b5c54c09583ec02325c3b069e84164f4a"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Lily" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240, margin: '16px' }}
        cover={<img alt="plant" src="https://img.freepik.com/premium-photo/pink-beautiful-orchid-white-surface_120872-21408.jpg?w=360"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Orchid" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240, margin: '16px' }}
        cover={<img alt="plant" src="https://img.freepik.com/free-vector/mixed-dahlia-flowers_53876-80665.jpg?w=740&t=st=1707826895~exp=1707827495~hmac=e6531473d04a952e34a2b323118e4c38d89382512168008088291ef35a994ea9"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Dahlia" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240, margin: '16px' }}
        cover={<img alt="plant" src="https://img.freepik.com/free-photo/green-branch-with-pink-flowers_23-2147699509.jpg?w=740&t=st=1707827200~exp=1707827800~hmac=dac4268224bda23586a9a548692485f7610be79c9647c749a5edf0f2a2b8ff72"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Bougainvillea" style={{ textAlign: 'center' }} />
      </Card>

      <Card
        hoverable
        style={{ width: 240, margin: '16px' }}
        cover={<img alt="plant" src="https://img.freepik.com/free-photo/side-view-red-color-roses-isolated-white-background_141793-8621.jpg?w=996&t=st=1707827385~exp=1707827985~hmac=3b312d9f2019ab89bdac3225ebed0746c1bd5b7df8f7ad1e0365f0b575a95c38"
          style={{ height: '150px', objectFit: 'cover' }} />}
      >
        <Meta title="Rose" style={{ textAlign: 'center' }} />
      </Card>

    </div>

     <BottomNavbar/>

    </div>
  )
}

export default Category