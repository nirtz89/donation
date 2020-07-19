import React from 'react';
import './Question.scss';
import { IQuestionType, IQuestion, ITransportationType } from '../App';

function Question(props) {

    const makeQuestion = (question: IQuestion) => {
        let toReturn: any;
        switch (question.type) {
            case IQuestionType.Bool:
                toReturn = (<>
                <button className="Button secondary">NO</button>
                <button className="Button primary">YES</button>
                </>)
            break;
            case IQuestionType.Location:
                toReturn = (<>
                    <input placeholder="LOCATION"/>
                    </>)
            break;
            case IQuestionType.Number:
                toReturn = (<>
                    <input type="number" placeholder="NUMBER"/>
                    </>)
            break;
            case IQuestionType.Hours:
                toReturn = (<>
                    <input type="number" placeholder="FROM"/>
                    <input type="number" placeholder="TO"/>
                    </>)
            break;
            case IQuestionType.People:
                toReturn = (<>
                    <input placeholder="PEOPLE"/>
                    </>)
            break;
            case IQuestionType.Transportation:
                let items: any[] = [];
                let index = 0;
                for (let item in ITransportationType) {
                    items.push(<option key={index}>{item}</option>);
                    index++;
                }
                toReturn = (
                <>
                    <select >
                        {items}
                    </select>
                </>
                )
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
