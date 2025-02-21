import React, { useEffect, useState } from 'react'
import './timer.css'

function Timer() {

    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState('')

    useEffect(()=>{
        let valid;

        if(isRunning) {
            valid = setInterval(()=>{
                setSeconds(prevSeconds => prevSeconds+1)
            })
        }
        return() => clearInterval(valid)
    }, [isRunning])

    useEffect(()=>{
        document.title = formatTime(seconds)
    },[seconds])

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    const handlePause = () => setIsRunning(false)
    const handleResume = () => setIsRunning(true)
    const handleReset = () => {
        setIsRunning(false)
        setSeconds(0);
    }

  return (
    <div>

        <h1>{formatTime(seconds)} ⏱️ </h1>

        <center>

        <button onClick={handlePause}>Pause</button>

        <button onClick={handleResume}>Resume</button>

        <button onClick={handleReset}>Reset</button>

        </center>

    </div>
  )
}

export default Timer
