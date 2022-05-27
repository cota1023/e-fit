import React, { useState } from "react"


const Counter = ({initialValue, title, stock}) =>{
    
    //const {initialValue, title} = props

    const [count, setCount] = useState(initialValue)

    const increment=()=>{
        if(count<stock){
            setCount(count+1)    
        }else{
            alert("No hay stock disponible")
        }
        
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)    
        }else{
            alert("No se puede disminuir")
        }
    }

    const reset=()=>{
        setCount(0)
    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={reset}>RESET</button>

        </div>


    )

}

export default Counter