import { useEffect, useState } from 'react'

export default function LocalStorage() {

    // Initialize count from localStorage, or default to 0
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count');
        const parsed = Number(saved);
        return saved !== null && !isNaN(parsed) ? parsed : 0;
    });

    // Save the count to localStorage whenever it changesT
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
