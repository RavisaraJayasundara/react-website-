import {useState} from 'react';
import {FruitsInfo} from './fruitsData.js';

export default function Fruits(){
    var fruits=["Apple","Orange","Graps","Mango"];
    const[index,setIndex]=useState(0);

    const prev = ()=>{
        if(index<1){
            alert('Out of range');
        }else{
            setIndex(index-1);
        }
    }
    const next = ()=>{
        if(index>fruits.length-2){
            alert('Out of range');
        }else{
            setIndex(index+1);
        }
    }
    return(
        <div>
             <h1>Fruits</h1>
            <h2>{fruits[index]}</h2>
            <img src={FruitsInfo[index].image}/>
            <p>{FruitsInfo[index].description}</p>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}