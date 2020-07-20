import React from 'react';
import './Question.scss';
import { IQuestionType, IQuestion, ITransportationType } from '../App';
import { Button } from '@material-ui/core';

function Question(props) {

    const makeQuestion = (question: IQuestion) => {
        let toReturn: any;
        switch (question.type) {
            case IQuestionType.Bool:
                toReturn = (<>
                <Button variant="contained" color="primary">Yes</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary">No</Button>
                </>)
            break;
            case IQuestionType.Location:
                toReturn = (<>
                    <input placeholder="LOCATION"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Number:
                toReturn = (<>
                    <input type="number" placeholder="NUMBER"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Hours:
                toReturn = (<>
                    <input type="number" placeholder="FROM"/>
                    <input type="number" placeholder="TO"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.People:
                toReturn = (<>
                    <input placeholder="PEOPLE"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
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
