import React from 'react'
import { useState } from 'react'
import './Counter.css'
import './API_Diplay'


function Counter() {
    const [count, setCount] = useState(0)

    const fetchAPiI =() => {
        const API = fetch('https://fakestoreapi.com/products/{count}')
            .then(res=>res.json())
            .then(json=>console.log(json));
    }

    const increaseCount = () => {
        if (count < 10) {
            setCount(count + 1)
        }

    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div class="Heading">
                <h1>Counter Application</h1>
                <h3>This a Simple counter application which displays products discription based on the counter value</h3>
            </div>

            <div class="Counter">

                <div>
                    <h2>Counter</h2>
                </div>

                <div class ="btn_display">
                <button class="sub" id="sub" onClick={decreaseCount}>-</button>   
                </div>             
                
                <div>
                <h3>{count}</h3>         
                </div>

                <div>
                <button class="add" id="add" onClick={increaseCount}>+</button>
                </div>
                
                <div class="btns" >
                <button class="btn" id="reset" onClick={() => setCount(0)}>Reset</button>
                </div>
                
            </div>

        </div>
    )
}

export default Counter