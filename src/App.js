import { useEffect, useState } from 'react';
import video from './boy.mp4';
import './App.css';

function App() {
  const[myAdvice, setMyAdvice] = useState(null);
  //useEffect(()=>{
  // getAdvice();
  //},[])

    const getAdvice = async() =>{
      const response = await fetch (`http://www.boredapi.com/api/activity/ `)
      const data = await response.json();
      console.log(data.activity);
      setMyAdvice(data.activity);
    }
  
  return (
    <div className='container'>
          <video className='video'autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
        
            <div className='box'>
            <h1>You are bored and have no idea what to do?</h1>
            <h2 className='tip'>{myAdvice}</h2>
            <button onClick={ getAdvice }>GET AN IDEA</button>
            </div>
    </div>
    
    
  );
}

export default App;
