import React, { useEffect, Dispatch, SetStateAction } from 'react';
import './Question.scss';
import { IQuestionType, IQuestion, ITransportationType, IAppState } from '../App';
import { Button } from '@material-ui/core';

export interface IQuestionProps {
    question: IQuestion;
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
}

function Question(props: IQuestionProps) {

    useEffect(() => {
        props.setLocation('');
    }, []);

      const onClick = (...params) => {
        const state = { ...props.appState};
        let event = state.days[state.currentDate].events.find(event => event.guid === state.currentEvent);
        event = props.question.updateEvent(event, ...params);
        if (!event) {
            console.error('event not found!');
            return;
        }
        event.currentQuestion++;
        const index = state.days[state.currentDate].events.indexOf(event => event.guid === state.currentEvent);
        state.days[state.currentDate].events.splice(index, 1);
        state.days[state.currentDate].events.push(event);
        props.setAppState(state);
    }

    const makeQuestion = (question: IQuestion) => {
        let toReturn: any;
        switch (question.type) {
            case IQuestionType.Bool:
                toReturn = (<>
                <Button variant="contained" color="primary" onClick={() => onClick(true)}>Yes</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => onClick(false)}>No</Button>
                </>)
            break;
            case IQuestionType.Location:
                toReturn = (<>
                    <div id="location-div" style={{ position: 'relative', maxWidth: '300px', top: '16px'}} />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2}} onClick={onClick}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Number:
                toReturn = (<>
                    <input id="number-input" type="number" placeholder="NUMBER"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => onClick((document.getElementById('number-input') as any).value)}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Hours:
                toReturn = (<>
                    <input id='from-input' type="number" placeholder="FROM" />
                    <input id='to-input' type="number" placeholder="TO" />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => onClick((document.getElementById('from-input') as any).value, (document.getElementById('to-input') as any).value)}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.People:
                toReturn = (<>
                    <input id='person-name-input' placeholder="PEOPLE"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => onClick((document.getElementById('person-name-input') as any).value)}>
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
