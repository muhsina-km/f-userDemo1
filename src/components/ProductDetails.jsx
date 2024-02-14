import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../Api';

const ProductDetails = () => {

  const { plantid } = useParams();

  const [Plantdetailsview, setPlantdetailsview] = useState([]);

  useEffect(() => {
    // Fetch the details of the product with id
    axios.get(`${baseurl}/plantdetails/pview/${plantid}`)
    .then((response) => {
        console.log(response.data);
        setPlantdetailsview(response.data);
      })
      .catch((err) => console.log(err));
  }, [plantid])

  if (!Plantdetailsview) {
    return <div>Loading...</div>; // You can customize the loading state
  }

  return (
    <div>
      <h2>{Plantdetailsview.plantname} Details</h2>
      <img src={Plantdetailsview.plantphoto} alt="image" style={{ height: '150px', objectFit: 'cover' }} />
      <p>Price: ₹{Plantdetailsview.price}</p>
      <p>Description: {Plantdetailsview.description}</p>
      {/* You can display other details of the product */}
    </div>
  );
};

export default ProductDetails;
