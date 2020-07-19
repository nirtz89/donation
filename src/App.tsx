import React from 'react';
import Container from './components/Container';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export interface IDay {
  date: Date,
  events: IEvent[]
}

export interface IPeople {
  name: string,
  phone: string,
  id: string
}

export interface IEvent {
  guid: string;
  location: {lan: number, lon: number};
  answeres: Record<number, IQuestion>;
  date: Date;
  people: IPeople[],
  transportationFrom: ETransportationType;
  transportationTo: ETransportationType;
}

export interface IQuestion {
  guid: string;
  type: EQuestionType,
  question: string,
  condition?: string,
  followUp?: IQuestion[]
}

export enum EQuestionType {
  Bool,
  Hours,
  Location,
  Number,
  People,
  Transportation
}

enum ETransportationType {
  Taxi,
  Bus,
  Walk,
  Bycicle
}

function App() {

  const questions: IQuestion[] = [
    {
      guid: uuidv4(),
      type: EQuestionType.Location,
      question: 'Where have you been?'
    },
    {
      guid: uuidv4(),
      type: EQuestionType.Bool,
      question: 'Did you wear a mask?'
    },
    {
      guid: uuidv4(),
      type: EQuestionType.Hours,
      question: 'At what hours? (or how long)'
    },
    {
      guid: uuidv4(),
      type: EQuestionType.Number,
      question: 'How many people were there with you?',
      condition: '> 0',
      followUp: [
        {
          guid: uuidv4(),
          type: EQuestionType.People,
          question: 'Please fill in the people that you know that were with you',
        }
      ]
    },
    {
      guid: uuidv4(),
      type: EQuestionType.Transportation,
      question: 'How did you get there?'
    }
  ]

  return (
    <div className="App">
      <Container questions={questions} />
    </div>
  );
}

export default App;
