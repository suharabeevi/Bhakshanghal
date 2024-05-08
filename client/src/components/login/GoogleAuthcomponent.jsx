// import React from 'react'
// import { GoogleLogin } from "@react-oauth/google";

// const GoogleAuthcomponent = () =>{
//     const handleLogin = (response) => {
//       // Handle the authentication response
//       console.log(response);
//     };
  
//     const handleFailure = (error) => {
//       // Handle the authentication failure
//       console.error(error);
//     };
  
//     return (
//         <div className='mt-5'>

       
//       <GoogleLogin 
//         clientId="265313542487-ojlhm2ja00ibjd06p1hk1acjapgd9j9t.apps.googleusercontent.com"
//         onSuccess={handleLogin}
//         onFailure={handleFailure}
        
//       />
//        </div>
//     );
//   };

// export default GoogleAuthcomponent
import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import axios from 'axios'; // Import Axios for making HTTP requests

const GoogleAuthComponent = () => {
  const handleLogin = async (response) => {
    try {
        console.log(response,"resssssssssssssssss");
      const { credential} = response;
    //   console.log(accessToken,"Access token");
      // Send the access token to the backend
      const backendResponse = await axios.post('http://localhost:8000/api/user/login_with_google', { credential });
console.log(backendResponse,"baackend");
      if (backendResponse.status === 200) {
        // If backend authentication is successful, you can redirect or handle the response accordingly
        console.log('Authentication successful');
      } else {
        // Handle backend authentication failure
        console.error('Authentication failed on the backend');
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
    }
  };

  return (
    <div className='mt-5 ml-9'>
      <GoogleLogin 
        clientId="265313542487-ojlhm2ja00ibjd06p1hk1acjapgd9j9t.apps.googleusercontent.com"
        onSuccess={handleLogin}
        onFailure={(error) => console.error('Google login failed:', error)}
      />
    </div>
  );
};

export default GoogleAuthComponent;
