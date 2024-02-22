import { Card, Col, Row, Skeleton } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseurl from '../Api';

const CartCard = ({id,counts}) => {
    console.log(id,counts)
    const count = parseInt(counts);
    const [plantdetailsview, setPlantdetailsview] = useState();
// retrive items info
useEffect(() => {
    // Fetch the details of the product with id
    axios
      .get(`${baseurl}/plantdetails/pview/${id}`)
      .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data[0]);
      })
      .catch((err) => console.log(err));
      
  }, [id]);

  return (
    <Card hoverable style={{width:'200px'}}>
        {plantdetailsview?(<><Row>
            <Col span={24}>
        <img src={plantdetailsview.plantphoto} style={{width:'100%'}} alt="plant" />
        </Col>
        <Row>
            <Col span={24}>
                <p>{plantdetailsview.plantname}</p>
                <p>₹:{plantdetailsview.price}</p>
                <p>Total Items:{count}</p>
                <p>Total Price:₹{plantdetailsview.price*count}</p>
            </Col>
            </Row>
        </Row></>):<Skeleton active/>}
        
      </Card>
  )
}

export default CartCard
