import { useState, useEffect } from 'react';

function WindowSizeTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Size Tracker</h2>

            <p>Width: {windowWidth}px</p>
            <p>Height: {windowHeight}px</p>
            <hr />
        </div>
    );
}

export default WindowSizeTracker;