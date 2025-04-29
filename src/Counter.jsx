import React from 'react'
import { useState, useEffect } from 'react'
import './Counter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";


function Counter() {
    const [count, setCount] = useState(1);

    const [product, setProduct] = useState(null);
    

    const increaseCount = () => {
        if (count < 10) {
            setCount(count + 1);
            // fetchDataFromAPI();
        }

    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
            // fetchDataFromAPI();
        }
    }

   
    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try{ const res = await fetch(`https://fakestoreapi.com/products/${count}`); // making an API call
            const data = await res.json(); // processing the data to json format
            setProduct(data); // saving the data to use for further UI rendering in a component state varibale
            console.log("This is the reponse data from Fake store API", data); // displaying in consol 
         
        }
         catch{
            setProduct(null);
         }

      };
  
      fetchDataFromAPI();
    }, [count]);


    return (
        <div>
            <div className="Heading">
                <h1>Counter Application</h1>
                <h3>This a Simple counter application which displays products discription based on the counter value</h3>
            </div>

            <div className="Counter">

                <div>
                    <h2>Counter</h2>
                </div>

                <div className ="btn_display">
                <button className="sub" id="sub" onClick={decreaseCount}>-</button>   
                </div>             
                
                <div>
                <h3>{count}</h3>         
                </div>

                <div>
                <button className="add" id="add" onClick={increaseCount}>+</button>
                </div>
                
                <div className="btns" >
                <button className="btn" id="reset" onClick={() => setCount(1)}>Reset</button>
                </div>            
            </div>

            <div className="ApiDisplay">
               

                {/* Using terminary Operator for apply 
                                            if(product) =====>exist
                                            then diaplay div ==>product 
                                            ifnot  Loading... would be displayed   */}
                
                { product?                  
                    <div className='Product' id='product'>
                        <div id="img">
                            <img src={product.image} alt={product.title} width="150" />
                        </div>
                        <div id="details">
                            <p id="title">{product.title}</p>
                            <p id="description">{product.description}</p>
                            <div className='PriceNrate'>
                                <p id="price" >{product.price} $     </p>
                                <p id="rate"> <FontAwesomeIcon icon={faStar} /> {product.rating.rate} ({product.rating.count})</p> 
                            </div>
                    </div>     
                </div>
                : <p id='loader'>Loading...</p>
                        }
                        
                </div>
            </div>
    
    )
}

export default Counter