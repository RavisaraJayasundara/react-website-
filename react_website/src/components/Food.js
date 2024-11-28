import {FoodInfo} from './foodData';
import {useState} from 'react';
export default function Food(){
    var foods=["Cake","Pizza","Burger","Muffin","Noodles","Rice","Chocolate"];
    const[index,setIndex]=useState(0);

    const prev=()=>{
        if(index<1){
            alert('Out of range');
        }else{
            setIndex(index-1);
        }
    }
    const next=()=>{
        if(index>FoodInfo.length-2){
            alert('Out of range');
        }else{
            setIndex(index+1);
        }
    }

    return(
        <div>
             <h1>Foods</h1>
             <h2>{foods[index]}</h2>
             <img src={FoodInfo[index].image}></img>
             <p>{FoodInfo[index].description}</p>
             <button onClick={prev}>Previous</button>
             <button onClick={next}>Next</button>

        </div>
    )
}