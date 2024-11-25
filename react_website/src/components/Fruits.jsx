import React,{useState} from 'react';


export default function Fruits(){
    var fruits=["Apple","Orange","Grapes","Woodapple","Mango"];
    const [index,setIndex]=useState(0);
    const prev = ()=>{
        if(index<1){
            alert('Out of range');
        }else{
            setIndex(index-1);
        }
    }
    const next=()=>{
        if(index>fruits.length-2){
            alert('Out of range');
        }else{
            setIndex(index+1)
        }
    }

    return(
        <div>
            <h1>{fruits[index]}</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
} 