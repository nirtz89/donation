import React, { useState, useEffect } from 'react';
import './Progressbar.scss';
import { IDay } from '../App';

export interface IProgressbarProps {
    days: Record<string, IDay[]>;
}

function Progressbar(props: IProgressbarProps) {
    const [progress, setProgress] = useState(0);
    useEffect(()=> {
        let count = 0;
        Object.values(props.days).forEach(days => {
            days.forEach((day: IDay) => {
                day.events.length > 0 && count++;
            });
        });
        const progressAddition = count / 14;
        setProgress(progressAddition * 100);
    },[props.days])


    return (
    <>
        <div className="Progressbar">
            <div className="inner" style={{width:`${progress}%`}}>

            </div>
        </div>
        <div className="Progressbar-text">
            {(progress).toFixed(0)}% Completed
        </div>
    </>
    );
}

export default Progressbar;
