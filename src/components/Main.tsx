import React from 'react';
import {useState} from 'react';
import './Main.scss';
import Progressbar from './Progressbar';
import Question from './Question';

function Main(props) {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="Main">
        <Progressbar questions={props.questions}/>
        <div className="QuestionWrapper">
            {props.questions[currentQuestion] ? 
            <Question question={props.questions[currentQuestion]} />
            :
            'no questions :('
            }
        </div>
        {props.questions[currentQuestion] && <button onClick={()=>setCurrentQuestion(currentQuestion+1)}>NEXT</button>}
    </div>
  );
}

export default Main;
