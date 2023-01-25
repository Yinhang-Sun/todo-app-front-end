import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    //[0, f]
    const [count, setCount] = useState(0)

    function incrementCounterFunction() {
        
        setCount(count + 1)
    }

    function decrementCounterFunction() {
        
        setCount(count - 1)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                >+1</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >-1</button>
            </div>

        </div>

    )
}