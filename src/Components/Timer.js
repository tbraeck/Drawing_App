
import React, { useState, useRef, useEffect } from "react";
 
const Timer = () => {
    const Ref = useRef(null);
     const [timer, setTimer] = useState("00:00:00");
 
    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };
 
    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer("00:00:15");
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 15);
        return deadline;
    };
 
    
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
  
    const onClickReset = () => {
        clearTimer(getDeadTime());
    };
 
    return (
        <div
            style={{ textAlign: "center", margin: "auto", marginLeft: "30px" }}>
            {/* <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1> */}
            {/* <h3>Countdown Timer Using React JS</h3> */}
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
    );
};
 
export default Timer
