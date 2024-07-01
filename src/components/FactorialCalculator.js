import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
    const [number, setNumber] = useState(0);

    const factorial = useMemo(() => {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }, [number]);

    return (
        <div className="factorial-calculator-container">
            <h2>Factorial Calculator</h2>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <p className="factorial-result">Factorial of {number} is: {factorial}</p>
        </div>
    );
};

export default FactorialCalculator;
