import React, { useEffect, Dispatch, SetStateAction, useState } from 'react';
import './Question.scss';
import { IQuestionType, IQuestion, ITransportationType, IAppState, IEventType } from '../App';
import { Button, Select, MenuItem, FormControl, TextField } from '@material-ui/core';

export interface IQuestionProps {
    question: IQuestion;
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
}

function Question(props: IQuestionProps) {

    const [eventTypeState,setEventTypeState] = useState('Gym');
    const [transState,setTransState] = useState('Taxi');

    useEffect(() => {
        props.setLocation('');
    }, [props]);

    const nextClick = (...params) => {
        const state = { ...props.appState};
        let event = state.days[state.currentDate].events.find(event => event.guid === state.currentEvent);
        event = props.question.updateEvent(event, ...params);
        if (!event) {
            console.error('event not found!');
            return;
        }
        event.currentQuestion++;
        const index = state.days[state.currentDate].events.indexOf(event);
        state.days[state.currentDate].events.splice(index, 1);
        state.days[state.currentDate].events.push(event);
        props.setAppState(state);
    }

    const backClick = () => {
        const state = { ...props.appState};
        let event = state.days[state.currentDate].events.find(event => event.guid === state.currentEvent);
        if (!event) {
            console.error('event not found!');
            return;
        }
        event.currentQuestion--;
        props.setAppState(state);
    }

    const renderBackClick = () => {
        const state = { ...props.appState};
        let event = state.days[state.currentDate].events.find(event => event.guid === state.currentEvent);
        if (!event) {
            console.error('event not found!');
            return;
        }
        return event.currentQuestion > 0;
    }

    const renderOptionsQuestion = (enumType: any) => {
        let items: any[] = [];
        let index = 0;
        for (let item in enumType) {
            items.push(<MenuItem key={index} value={item}>{item}</MenuItem>);
            index++;
        }
        return (
        <>
        <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={enumType === ITransportationType ? transState : eventTypeState}
          onChange={(event: any) => enumType === ITransportationType ? setTransState(event.target.value) : setEventTypeState(event.target.value)}
        >
            {items}
        </Select>
        </FormControl>
        <br />
        <br />
            <Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2}} onClick={() => nextClick(enumType === ITransportationType ? transState : eventTypeState)}>
                    Next
            </Button>
        </>
        )
    }

    const makeQuestion = (question: IQuestion) => {
        let toReturn: any;
        switch (question.type) {
            case IQuestionType.Bool:
                toReturn = (<>
                <Button variant="contained" color="primary" onClick={() => nextClick(true)}>Yes</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary" onClick={() => nextClick(false)}>No</Button>
                </>)
            break;
            case IQuestionType.Location:
                toReturn = (<>
                    <div id="location-div" style={{ position: 'relative', maxWidth: '300px', top: '16px'}} />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" style={{marginTop:'1em', zIndex: 2}} onClick={nextClick}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.EventType:
                toReturn = renderOptionsQuestion(IEventType);

            break;
            case IQuestionType.Number:
                toReturn = (<>
                    <input id="number-input" type="number" placeholder="NUMBER"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => nextClick((document.getElementById('number-input') as any).value)}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Hours:
                toReturn = (<>
                    <TextField
                        id="from-input"
                        label="From"
                        type="time"
                        defaultValue="07:30"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <TextField
                        id="to-input"
                        label="To"
                        type="time"
                        defaultValue="07:45"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => nextClick((document.getElementById('from-input') as any).value, (document.getElementById('to-input') as any).value)}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.People:
                toReturn = (<>
                    <input id='person-name-input' placeholder="PEOPLE"/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={() => nextClick((document.getElementById('person-name-input') as any).value)}>
                        Next
                    </Button>
                    </>)
            break;
            case IQuestionType.Transportation:
                toReturn = renderOptionsQuestion(ITransportationType);
            break;
        }
        return toReturn;
    }

  return (
    <div className="Question">
      <h2>{props.question.question}</h2>
      {makeQuestion(props.question)}
      {renderBackClick() ? <Button variant="contained" color="secondary" onClick={() => backClick()}>
                         Back
                        </Button>
                        : null
     }
    </div>
  );
}

export default Question;
