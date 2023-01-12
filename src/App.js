import React from 'react';
import Navbar from './Navbar';
import ChuckyJokes from './ChuckyJokes';

import './App.css';
import { Routes, Route } from "react-router-dom"


ReactDOM.render(<ChuckNorrisJoke />, document.getElementById('root'));


function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(response => setJoke(response.data.value.joke));
  }, []);

  return (
    <div className="App">
      <Navbar />
  
      <div>
        <p>{joke}</p>
      </div>
    </div>
  );
}

export default App;


