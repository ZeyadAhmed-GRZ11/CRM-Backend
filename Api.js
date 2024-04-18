const axios = require('axios');

// Define the URL of the Axis API endpoint
const apiUrl = 'https://localhost:5000';

// Define any headers or authentication tokens if required
const headers = {
  'Authorization': 'Bearer your_access_token',
  'Content-Type': 'application/json'
};

// Example GET request
axios.get(apiUrl + '/endpoint', { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });

// Example POST request
const postData = {
  key: 'value'
};

axios.post(apiUrl + '/endpoint', postData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });

// Example PUT request
const putData = {
  key: 'updated_value'
};

axios.put(apiUrl + '/endpoint', putData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });

// Example DELETE request
axios.delete(apiUrl + '/endpoint', { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });