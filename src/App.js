import { useState } from 'react';
import video from './boy.mp4';
import './App.css';

function App() {
  const[myAdvice, setMyAdvice] = useState(null);

  const getAdvice = async () => {
    try {
      const response = await fetch('/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMyAdvice(data.activity);
    } catch (error) {
      console.error('Failed to fetch advice:', error);
      setMyAdvice('Could not fetch advice. Please try again later.');
    }
  };
  
  
  return (
    <div className='container'>
          <video className='video'autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
        
            <div className='box'>
            <h1>Are you bored and looking for ideas?</h1>
            <h2 className='tip'>{myAdvice}</h2>
            <button onClick={ getAdvice }>GET AN IDEA</button>
            </div>
    </div>
    
    
  );
}

export default App;
