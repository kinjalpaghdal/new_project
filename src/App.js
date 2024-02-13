import './App.css';
import React, {  useEffect } from 'react';

function App() {

  const fetchData = async () => {
    try{
     const res =  await fetch ("http://localhost:5000");
     const data = res.json();
     console.log(data)
    }catch (error){
    console.log(error, "error")
    }
  }
  useEffect (() => {
    fetchData()
  }, []);


  // Make a GET request to the API
// fetch('http://localhost:5000', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     // Add any additional headers if required
//   },
// })
// .then(response => {
//   // Check if the response is successful
//   if (response.ok) {
//     // Parse the JSON response
//     return response.json();
//   }
//   // If response is not ok, throw an error
//   throw new Error('Network response was not ok.');
// })
// .then(data => {
//   // Handle the data received from the API
//   console.log(data);
// })
// .catch(error => {
//   // Handle any errors that occur during the fetch
//   console.error('There was a problem with the fetch operation:', error);
// });

  return (
    <div>      
        <div>
          <h1>hello developer</h1>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

          {/* <table border='1'>
            <tr>
            <th>no.</th>
            <th>name</th>
            <th>detail</th>
            </tr>
           
            {
            responseData.map((item)=>
            <tr>
            <td>1</td>
            <td>kinjal</td>
            <td>developer</td>
            </tr>
            )}            
           
          </table> */}
        </div>
      
    </div>
  );
}

export default App;
