import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import burger UI component
import Burger from './Burger';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios
      .get('http://api.icndb.com/jokes/random')
      .then(response => setJoke(response.data.value.joke));
  }, []);

  return (
    <div>
      <Burger />
      <div>
        <p>{joke}</p>
      </div>
    </div>
  );
}

export default App;


