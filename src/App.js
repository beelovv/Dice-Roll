import Dice from './components/Dice'; 
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import { useState } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState('/images/dice-6.png')
function diceRoll(){
    let diceNum = Math.floor(Math.random()*(7-1)+1)
    setImageSrc(`/images/dice-${diceNum}.png`)
}
  return (
    <div className="App">
      <Header/>
      <main>
        <div className='dice-container'>
          <Dice  imgSrc={imageSrc}/>
          <Button onClick={diceRoll}>Roll</Button>
        </div>
      </main>
    </div>
  );
  
}
export default App;
