import React, { useState } from 'react';
import Container from './components/Container';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export interface IDay {
  events: IEvent[]
}

export interface IPeople {
  name: string,
  phone: string,
  id: string
}

export interface IEvent {
  guid: string;
  location: {lat: number, lon: number};
  answeres: Record<number, IQuestion>;
  date: Date;
  people: IPeople[],
  transportation: ITransportationType;
}

export interface IQuestion {
  guid: string;
  type: IQuestionType,
  question: string,
  condition?: string,
  followUp?: IQuestion[]
}

export enum IQuestionType {
  Bool,
  Hours,
  Location,
  Number,
  People,
  Transportation
}

export enum ITransportationType {
  Taxi = "taxi",
  Bus = "bus",
  Walk = "walking",
  Bicycle = "bicycle"
}

interface IInitState {
  days: Record<string,IDay[]>;
  questions: IQuestion[];
}

function App() {

  const initState: IInitState = {
    days: {},
    questions: [
    {
      guid: uuidv4(),
      type: IQuestionType.Location,
      question: 'Where have you been?'
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Bool,
      question: 'Did you wear a mask?'
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Hours,
      question: 'At what hours?'
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Number,
      question: 'How many people were there with you?',
      condition: '> 0',
      followUp: [
        {
          guid: uuidv4(),
          type: IQuestionType.People,
          question: 'Please fill in the people that you know were there',
        }
      ]
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Transportation,
      question: 'How did you get there?'
    }
  ]
}

  const [state, setState] = useState(initState);
  const [location, setLocation] = useState(null);

  return (
    <div className="App">
      <Container appState={state} setAppState={setState} location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;
