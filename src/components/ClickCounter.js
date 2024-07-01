import React, { useState, useCallback } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div className="click-counter-container">
            <h2>Click Counter</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick} className="click-counter-button">Increment</button>
        </div>
    );
};

export default ClickCounter;
