import React from 'react'
import "./Counter.css"
import { useState } from 'react';


const Counter = () => {
    const [counter,setCounter] = useState(0);

    const increaseCounter = () =>{
        if(counter<10)
            {
        setCounter(counter+1)
            }
    }

    const decreaseCounter = () =>{
        if(counter>0){
        setCounter(counter-1)}
    }
  return (
    <div>
        
    {/* DIV - for heading counter */}

    <div>
        <h1 style={{
            fontSize: "2rem",
            color: "#200020",
            }}>Counter App</h1>
    </div>

    <div>
        <p style={{
            fontSize: "1.5rem",
            color: "#200020",
            }}>
            Counter:
            <span>{counter}</span>
            </p>
    </div>


    <div className="button_container"
    style={{
        display:'flex',
        gap: "1rem",
        }}
    >
        <button className="button"
        onClick={increaseCounter}
        style={{
            fontSize: "2rem",
            background : "green",
            color: "white",
            padding: "2rem",
            }} >Increase</button>
        <button className="button"
        onClick={decreaseCounter}
        style={{
            fontSize: "2rem",
            background : "red",
            color: "white",
            padding: "2rem",
            }}>Decrease</button>
    
    </div>
    
    <div>
        {counter>=10?
        <h2 className="alert" 
        style={{color:"red"}}>This Counter is above Max limit</h2>:<div></div>}
    </div>

    <div>
        {counter<=0?
        <h2 className="alert"
        style={{color:"green"}}>This Counter can't be decre</h2>:<div></div>}

    </div>        
    </div>

  )
}

export default Counter
Counter
