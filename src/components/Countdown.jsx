import { useRef, useState, useEffect } from "react";

function Circle({ value, text }) {
    
    return (
        <div className="circle font-lora">
            <p className="text-2xl">{value}</p>
            <p>{text}</p>
        </div>
    )

}

function formatDaysText(days) {
    if(days % 10 === 1) {
        return'день';
    } else if(days % 10 > 1 && days % 10 < 5) {
        return 'дня';
    } 
    return 'дней';
}

function formatHoursText(hours) {
    if(hours % 10 === 1) {
        return 'час';
    } 
    if(hours % 10 > 1 && hours % 10 < 5) {
        return 'часа';
    }
    return 'часов';

}

function formatMinutesText(mins) {
    if(mins % 10 === 1) {
        return 'минуту';
    }
    if(mins % 10 > 1 && mins % 10 < 5) {
        return 'минуты';
    }
    return 'минут';
}

function formatSecondsText(secs) {
    if(secs % 10 === 1) {
        return 'секунду';
    }
    if(secs % 10 > 1 && secs % 10 < 5) {
        return 'секунды';
    }
    return 'секунд';
}

export default function Countdown({ date }) {
    
    
    const [now, setNow] = useState(Date.now());
    let timerId = useRef(null);
    let daysText, hoursText, minutesText, secondsText = '';

    useEffect(() => {
        timerId.current = setInterval(() => {
            setNow(Date.now());
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    const timeRemaining = date - now;

    const remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const remainingHours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const remainingMinutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const remainingSeconds = Math.floor((timeRemaining / 1000) % 60);

    
    daysText = formatDaysText(remainingDays);
    hoursText = formatHoursText(remainingHours);
    minutesText = formatMinutesText(remainingMinutes);
    secondsText = formatSecondsText(remainingSeconds);

    return (
        <div className="countdown">
            <h3 className="font-roboto text-lg text-center uppercase mb-8">
                Ждем вас через...
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
                <Circle value={remainingDays} text={daysText} />
                <Circle value={remainingHours} text={hoursText} />
                <Circle value={remainingMinutes} text={minutesText} />
                <Circle value={remainingSeconds} text={secondsText} />
            </div>
            
        </div>
    )
}