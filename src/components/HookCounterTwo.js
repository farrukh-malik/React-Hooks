import React, { useState } from 'react';

function HookCounterTwo() {
    const initial = 0;
    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(initial) }}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default HookCounterTwo;