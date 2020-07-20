import React from 'react';
import {useState} from 'react';
import './Main.scss';
import Question from './Question';
import EventTimeline from './EventTimeline';

const Main = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="Main">
        <EventTimeline />
        <div className="QuestionWrapper">
            {props.questions[currentQuestion] ?
            <Question question={props.questions[currentQuestion]} location={props.location} setLocation={props.setLocation} />
            :
            'no questions :('
            }
        </div>
    </div>
  );
};

export default Main;
