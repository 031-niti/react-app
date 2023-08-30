import React, { useState } from 'react'

const StateInFunction = (props) => {
    const [state, setState] = useState ({
        id: props.id || "1",
        name: props.name || "exrth",
        counter:0 
    })
    const clickPlus = () => {
        setState({
            ...state,
            counter: state.counter + 1,
        });
    };

    const clickMinus = () => {
        setState({
            ...state,
            counter: state.counter - 1,
        });
    };

    return(
        <div>
            <h3>Name</h3>
            {state.name}
            <h3 className="Counter">Counter</h3>
            {state.counter}
            <div className="btn">
                <button onClick={clickPlus}>+</button>
                <button onClick={clickMinus}>-</button>
            </div>
        </div>
    )
}
export default StateInFunction;
