   // Profile.js
   import React, { useEffect, useState } from 'react';
   import { Typography } from 'antd';
   import axios from 'axios';

   const { Text } = Typography;

   const Profile = ({ user }) => {
     const [profileData, setProfileData] = useState(null);

     useEffect(() => {
       // Fetch user profile data using the user ID or any unique identifier
       const fetchProfileData = async () => {
         try {
           const response = await axios.get(`http://localhost:4005/profile/${user.id}`);
           setProfileData(response.data);
         } catch (error) {
           console.error('Error fetching profile data', error);
         }
       };

       if (user) {
         fetchProfileData();
       }
     }, [user]);

     if (!profileData) {
       return <div>Loading profile data...</div>;
     }

     return (
       <div>
         <h2>Welcome, {profileData.name}!</h2>
         <Text>Email: {profileData.email}</Text>
         {/* Add more profile details as needed */}
       </div>
     );
   };

   export default Profile;
   
