import { useState } from 'react'
import './Counter.css'

export default function Counter({by}) {

    //[0, f]
    //const [firstElt, secondElt] = array 
    const [count, setCount] = useState(0)

    function incrementCounterFunction() {
        
        setCount(count + by)
    }

    function decrementCounterFunction() {
        
        setCount(count - by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >-{by}</button>
            </div>

        </div>

    )
}