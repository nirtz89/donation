import React from 'react';
import {useState} from 'react';
import './Main.scss';
import Question from './Question';
import { Button } from '@material-ui/core';
import EventTimeline from './EventTimeline';

const Main = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextClicked = () => {
    setCurrentQuestion(currentQuestion + 1);

    const progressAddition = progress + ( 1 / (props.questions.length * 14));
    setProgress(progressAddition);
    const dispaly = (Math.round(progressAddition * 100) / 100).toFixed(2);
    console.debug('progess bar: ' + dispaly);
  };

  return (
    <div className="Main">
        <EventTimeline />
        <div className="QuestionWrapper">
            {props.questions[currentQuestion] ?
            <Question question={props.questions[currentQuestion]} />
            :
            'no questions :('
            }
        </div>
    </div>
  );
};

export default Main;
