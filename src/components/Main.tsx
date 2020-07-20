import React, { Dispatch, SetStateAction } from 'react';
import {useState} from 'react';
import './Main.scss';
import Question from './Question';
import EventTimeline from './EventTimeline';
import { IAppState } from '../App';

export interface IMainProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
}

const Main = (props: IMainProps) => {
  let event = props.appState.days[props.appState.currentDate] && props.appState.days[props.appState.currentDate].events.find(event => event!.guid === props.appState.currentEvent);
debugger;
  return (
    <div className="Main">
        <EventTimeline appState={props.appState} setAppState={props.setAppState} />
        <div className="QuestionWrapper">
            {event && props.appState.questions[event.currentQuestion] ?
            <Question question={props.appState.questions[event.currentQuestion]} location={props.location} setLocation={props.setLocation}  {...props} />
            :
            'no questions :('
            }
        </div>
    </div>
  );
};

export default Main;
