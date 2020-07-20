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

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="Main">
        <EventTimeline appState={props.appState} setAppState={props.setAppState} />
        <div className="QuestionWrapper">
            {props.appState.questions[currentQuestion] ?
            <Question question={props.appState.questions[currentQuestion]} location={props.location} setLocation={props.setLocation} />
            :
            'no questions :('
            }
        </div>
    </div>
  );
};

export default Main;
