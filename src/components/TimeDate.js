import {useEffect,useState } from "react";
import "../App.css";


export function DateTime() {
    const [DateTime, setDateTime] = useState(new Date().toLocaleString());

    //the useEffect to update the Date time every second
    useEffect(() => {
    let interval = setInterval( () => setDateTime(new Date().toLocaleString()))

    return () => clearInterval(interval)
    },[])

    return (
    <div className="DateTime">
        <p>Date & Time: {DateTime}</p>
    </div>
    );
}