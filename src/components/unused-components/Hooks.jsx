import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={theme} onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button style={theme} onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}