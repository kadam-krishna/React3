import { useState } from 'react';
import './App.css';

function App() {
  const [currentColor,setCurrentColor]=useState("#ffffff");
  const appStyle=
  {
    backgroundColor: currentColor
  }
  const black = ()=>
  {
    setCurrentColor("black");
  }
  const blue = ()=>
  {
    setCurrentColor("blue");
  }
  const purple = ()=>
  {
    setCurrentColor("purple");
  }
  const orange = ()=>
  {
    setCurrentColor("orange");
  }
  const pink = ()=>
  {
    setCurrentColor("pink");
  }
  const aqua = ()=>
  {
    setCurrentColor("aqua");
  }
  const grey = ()=>
  {
    setCurrentColor("grey");
  }
  const skyblue = ()=>
  {
    setCurrentColor("skyblue");
  }
  const olive = ()=>
  {
    setCurrentColor("olive");
  }
  const rosybrown  = ()=>
  {
    setCurrentColor("rosybrown");
  }
  const brown = ()=>
  {
    setCurrentColor("brown");
  }
  const red = ()=>
  {
    setCurrentColor("red");
  }
  const yellow = ()=>
  {
    setCurrentColor("yellow");
  }
  const clear = ()=>
  {
    setCurrentColor("white");
  }

  return (
    
    <div style={appStyle}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <button onClick={black} id='black'></button>
        <button onClick={blue} id='blue'></button>
        <button onClick={purple} id='purple'></button>
        <button onClick={orange} id='orange'></button>
        <button onClick={pink} id='pink'></button>
        <button onClick={aqua} id='aqua'></button>
        <button onClick={grey} id='grey'></button>
        <button onClick={skyblue} id='skyblue'></button>
        <button onClick={olive}id='olive'></button>
        <button onClick={rosybrown  } id='rosybrown '></button>
        <button onClick={brown} id='brown'></button>
        <button onClick={red} id='red'></button>
        <button onClick={yellow} id='yellow'></button>
        <br/>
        <br/>
        <button  id='pick' >Pick a color</button>

        <button id='pick' onClick={clear}> Clear</button>
      </center>
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      <br/>    
      </div>
  );
}

export default App;
