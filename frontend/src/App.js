import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a request to the backend
    fetch('http://localhost:4001/api/workouts/')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message); // Update state with the message from the server
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error: Server not responding');
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
