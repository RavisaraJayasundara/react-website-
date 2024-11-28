import React,{useState} from 'react';


export default function Food(){
    var food=["Cake","Rice","Bun","Biscuts"];
    const[index,setIndex]=useState(0);
    const prev=()=>{
        if(index<1){
            alert('Out of range');
        }else{
            setIndex(index-1);
        }
    }
    const next=()=>{
        if (index>food.length-2) {
            alert('Out of range');
        } else {
            setIndex(index+1);
        }
    }
    return(
        <div>
            <h1>{food[index]}</h1>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}