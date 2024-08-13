import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginStatus = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Spring Boot API
    axios.get('https://revtask1-ake5bwfyagafakgb.southindia-01.azurewebsites.net/login') 
      .then(response => {
        setMessage(response.data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Login Status</h2>
      <p>{message}</p> 
    </div>
  );
};

export default LoginStatus;
