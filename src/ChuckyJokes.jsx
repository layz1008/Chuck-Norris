import React, { useState } from 'react';

function ChuckyJokes() {
  const [joke, setJoke] = useState('');

  const handleClick = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Don't click</button>
      <p>{joke}</p>
    </div>
  );
}

export default ChuckyJokes;
