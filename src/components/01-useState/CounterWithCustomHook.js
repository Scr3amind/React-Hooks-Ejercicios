import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);
    const factor = 2;

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr />
            <button onClick={() => increment(factor)} className="btn btn-primary"> +{factor} </button> 
            <button onClick={reset} className="btn btn-primary"> Reset </button> 
            <button onClick={() => decrement(factor)} className="btn btn-primary"> -{factor} </button> 
            
        </>
    )
}
