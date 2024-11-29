
import './App.css';
import Arts from "./components/Arts";
import Fruits from "./components/Fruits";
import Food from "./components/Food";
import {useState} from 'react';

function App() {
  const[theme,setTheme]=useState(true);
  const lightTheme={
       backgroundColor :'white',
       color :'black'
  }
  const darkTheme={
    backgroundColor:'black',
    color:'white'
  }
  return (
    <>
      <div style={theme?lightTheme:darkTheme}>
        <button onClick={()=>setTheme(!theme)}>{theme?'Light Theme':'Dark Theme'}</button>
        <Arts></Arts>
        <Food></Food>
        <Fruits></Fruits>
      </div>
    </>
  );
}

export default App;
