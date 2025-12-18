import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);


    useEffect(() => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        let r = 0;
        switch (operation) {
            case '+': r = n1 + n2; break;
            case '-': r = n1 - n2; break;
            case '*': r = n1 * n2; break;
            case '/': r = n2 !== 0 ? n1 / n2 : 'Не можно'; break;
            default: r = 0;
        }
        setResult(r);
    }, [num1, num2, operation]);


    return (
        <div className="calc">
            <input type="number"
                   value={num1}
                   onChange={(e) => setNum1(e.target.value)} />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number"
                   value={num2}
                   onChange={(e) => setNum2(e.target.value)} />
            <h3>Result: {result}</h3>
        </div>
    );
};
export default Calculator;