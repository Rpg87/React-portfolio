import './index.scss';
import { useEffect, useState } from 'react';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className="simple-clock">
            <div className="hour-hand" style={{ transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)` }} />
            <div className="minute-hand" style={{ transform: `rotate(${minutes * 6}deg)` }} />
            <div className="second-hand" style={{ transform: `rotate(${seconds * 6}deg)` }} />
        </div>
    );
};

export default AnalogClock;