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

  return (
    <div className="EventSummary">
        {props.event && (<p style={{padding: '1em'}}>You've been to the {props.event.type} from {props.event.startTime} to {props.event.endTime}, you've gotten there by {props.event.transportation}, you {props.event.maskOn ? 'did' : "didn't"} wear a mask.</p>)}
        <Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2}} onClick={() => {alert("CLICK")}}>Mark the day completed</Button>
    </div>
  );
};

export default EventSummary;
