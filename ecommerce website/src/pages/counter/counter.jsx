import './counter.css'
import { useState } from 'react'

function Counter(){
    const[counter , setCounter] = useState(0)

    function Increment(){
        setCounter(counter + 1);
    }

    function Decrement(){
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    return(
        <div className='counter'>
            <button className="plusBtn" onClick={Increment}>+</button>
            <p className="num">{counter}</p>
            <button className="minusBtn" onClick={Decrement}>-</button>
        </div>
    )
}


export default Counter