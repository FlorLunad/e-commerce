import { useState } from "react";
import React from 'react'
import "./styles.css"

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(0)
    
    const sumar = ()=>{
        if(stock === counter){
            return;
        }
        setCounter(counter + 1)
    }

    const restar = ()=>{
        if(counter === 0){
            return;
        }
        setCounter(counter - 1)
    }

  return (
    <div className="counter">
        <div className="controllers">
            <button onClick={restar}>-</button>
            <div>
                <span>{counter}</span>
            </div> 
            <button onClick={sumar}>+</button>
        </div>
        <div>
        <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;