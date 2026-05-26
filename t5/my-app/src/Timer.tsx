import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval)
        console.log('Timer Cleared');
    }, []);

    return (
        <div>
            <h2>Timer Component</h2>
            <p>Seconds: {seconds}</p>
            <hr />
        </div>
    );
}

export default Timer;