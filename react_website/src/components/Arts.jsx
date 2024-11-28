import React,{useState} from 'react';
import {sculptureList} from './data (1)';

export default function Arts(){
    const [index,setIndex] = useState(0);
    const prev=()=>{
        if(index<1){
            alert('Out of range');
        }else{
            setIndex(index-1);
        }
    }

    const next=()=>{
        if (index>sculptureList.length-2) {
            alert('Out of range');
        } else {
            setIndex(index+1);
        }
    }
    const first=()=>{
        setIndex(0);
    }
    const last=()=>{
        setIndex(sculptureList.length-1);
    }

    return(
        <div>
            <h1>{sculptureList[index].name}</h1>
            <img src={sculptureList[index].url}></img>
            <h2>{sculptureList[index].artist}</h2>
            <p>{sculptureList[index].description}</p>
            <button onClick={prev}>Previous</button>
            <button onClick={first}>First</button>
            <button onClick={last}>Last</button>
            <button onClick={next}>Next</button>
            

        </div>
    )
}