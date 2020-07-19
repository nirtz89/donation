import React from 'react';
import './Question.scss';
import { EQuestionType, IQuestion } from '../App';

function Question(props) {

    const makeQuestion = (question: IQuestion) => {
        let toReturn: any;
        switch (question.type) {
            case EQuestionType.Bool:
                toReturn = (<>
                <button className="Button secondary">NO</button>
                <button className="Button primary">YES</button>
                </>)
            break;
            case EQuestionType.Location:
                toReturn = (<>
                    <input placeholder="LOCATION"/>
                    </>)
            break;
            case EQuestionType.Number:
                toReturn = (<>
                    <input type="number" placeholder="NUMBER"/>
                    </>)
            break;
            case EQuestionType.Hours:
                toReturn = (<>
                    <input type="number" placeholder="FROM"/>
                    <input type="number" placeholder="TO"/>
                    </>)
            break;
            case EQuestionType.People:
                toReturn = (<>
                    <input placeholder="PEOPLE"/>
                    </>)
            break;
            case EQuestionType.Transportation:
                toReturn = (<>
                    <select><option value="bus">Bus</option>
                    <option value="bus">Taxi</option></select>
                    </>)
            break;
        }
        return toReturn;
    }

  return (
    <div className="Question">
      <h2>{props.question.question}</h2>
      {makeQuestion(props.question)}
    </div>
  );
}

export default Question;
