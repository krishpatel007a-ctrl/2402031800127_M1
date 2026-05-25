import { useState, useEffect } from 'react';

function First() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Count updated');
    }, [count]);

    useEffect(() => {
        console.log('Name updated');
    }, [name]);

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    useEffect(() => {
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    return (
        <div>
            <h2>First Component</h2>

            <p>Count: {count}</p>
            <p>Name: {name}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <br /><br />

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <hr />
        </div>
    );
}

export default First;