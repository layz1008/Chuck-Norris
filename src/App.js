import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import ChuckyJokes from './ChuckyJokes';
import './App.css';
import { Routes, Route } from "react-router-dom"


// ReactDOM.render(<ChuckNorrisJoke />, document.getElementById('root'));


function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    getJoke()
  }, [])

  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random', {
      //headers: {
        //"Accept": "application/json" 
      //}
    })
      .then(res => res.json())
      .then(data => setJoke(data))
  }

  console.log(joke.value)
  

  return (
    <div className="App">
      <Navbar getJoke={getJoke}/>
    
    <p>{joke.value}</p>
      <ChuckyJokes getJoke={getJoke} />
      
      {/* </Navbar> */}
    </div>
  );
}

export default App;


