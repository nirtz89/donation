import React, { Dispatch, SetStateAction, useState } from 'react';
import './Main.scss';
import Question from './Question';
import EventTimeline from './EventTimeline';
import { IAppState } from '../App';
import EventSummary from './Events/EventSummary';
import UserSummary from './UserSummary';
import { Button } from '@material-ui/core';

export interface IMainProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
}

const Main = (props: IMainProps) => {

    const [inqDone, setInqDone] = useState(false);

    console.log('days %o', props.appState.days);
    const isCurrentEventFull = () => {
    let currEvent: any = null;
    if (props.appState.days[props.appState.currentDate]) {
      currEvent = props.appState.days[props.appState.currentDate].events.find((ev)=>ev.guid===props.appState.currentEvent) ?? undefined;
    }
    return currEvent && currEvent.currentQuestion === props.appState.questions.length;
    };
    console.log("IS CURRENT EVENT FINISHED? " + isCurrentEventFull());


  const isInqFinish = () => {
    const days = Object.keys(props.appState.days);
    if (days.length < 2) {
        return false;
    }
    for (let day in props.appState.days) {
        if (!props.appState.days[day].done) {
            return false;
        }
    }
    return true;
  }

  let event = props.appState.days[props.appState.currentDate] && props.appState.days[props.appState.currentDate].events.find(event => event!.guid === props.appState.currentEvent);
  return (
    <div className="Main">
        {inqDone ? (<UserSummary appState={props.appState} />) :
        (
            <>
                <EventTimeline appState={props.appState} setAppState={props.setAppState} />
                <div className="QuestionWrapper">
                    {event && props.appState.questions[event.currentQuestion] ?
                    <Question question={props.appState.questions[event.currentQuestion]} {...props} />
                    :
                    isCurrentEventFull() ? <EventSummary {...props} event={event} /> : "Add a new event to start."
                    }
                </div>
                <div className="inq-button">
                    {isInqFinish() ? (<Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2, margin: '0 auto'}}  onClick={() => {setInqDone(true)}}>Finish inquiry</Button>) : null}
                </div>
            </>
        )
    }
    </div>
  );
};

export default Main;
