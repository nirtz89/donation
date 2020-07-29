import React, { Dispatch, SetStateAction } from 'react';
import './EventSummary.scss';
import { IAppState, IEvent } from '../../App';
import { Button } from '@material-ui/core';

export interface IEventSummary {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    event: IEvent | undefined;
}

const EventSummary = (props: IEventSummary) => {

    const handleDayCompleted = () => {
        const days = { ...props.appState.days };
        days[props.appState.currentDate].done = true;
        const newState = { ...props.appState, days  };
        props.setAppState(newState)
    }

  return (
    <div className="EventSummary">
        {props.event && (<p style={{padding: '1em 1em 1em 0', fontSize: '18px'}}>You've been to the {props.event.type} from {props.event.startTime} to {props.event.endTime}, you've gotten there by {props.event.transportation}, you {props.event.maskOn ? 'did' : "didn't"} wear a mask.</p>)}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2, margin: '0 auto'}} onClick={() => {handleDayCompleted()}}>Mark the day completed</Button>
        </div>
    </div>
  );
};

export default EventSummary;
