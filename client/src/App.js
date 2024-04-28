import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make sure the URL matches your server's URL and the endpoint
    fetch('http://localhost:3001/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
