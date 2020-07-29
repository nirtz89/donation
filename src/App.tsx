import React, { useState } from 'react';
import Container from './components/Container';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import moment from 'moment';

export interface IDay {
  events: IEvent[]
  done: boolean;
}

export interface IPeople {
  name?: string,
  phone?: string,
  id?: string
}

export enum IEventType {
    Gym = "gym",
    Home = "home",
    Pool = "pool",
    Sea = "sea",
    Prayer = "prayer",
    Clinic = "clinic",
    Restaurant = "restaurant",
    Pub = "pub"
}

export interface IEvent {
  guid: string;
  type?: IEventType;
  location?: {lat: number, lon: number};
  people?: IPeople[],
  startTime?: string;
  endTime?: string;
  numberOfPeople?: number,
  transportation?: ITransportationType;
  maskOn?: boolean;
  currentQuestion: number;
}

export interface IQuestion {
  guid: string;
  type: IQuestionType,
  question: string,
  condition?: string,
  followUp?: IQuestion[],
  updateEvent: Function
}

export enum IQuestionType {
  Bool,
  Hours,
  Location,
  Number,
  People,
  Transportation,
  EventType
}

export enum ITransportationType {
  Taxi = "taxi",
  Bus = "bus",
  Walk = "walking",
  Bicycle = "bicycle"
}

export interface IAppState {
  days: Record<string, IDay>; // key date string
  questions: IQuestion[];
  currentDate: string;
  currentEvent: string;
}

const App = (props) => {
    const testDate = props.history.location.state;
    const endDate = testDate ? testDate : new Date();
    const startDate = moment(endDate).add(-13, 'days').toDate();

    const initEvent: IEvent = {
        guid: uuidv4(),
        currentQuestion: 0
  }
  const initState: IAppState = {
    currentDate: startDate.toLocaleDateString(),
    currentEvent: initEvent.guid,
    days: {
        [startDate.toLocaleDateString()]: {events: [initEvent], done: true }
    },
    questions: [
    {
      guid: uuidv4(),
      type: IQuestionType.Location,
      question: 'Where have you been?',
      updateEvent: (event) => event
    },
    {
        guid: uuidv4(),
        type: IQuestionType.EventType,
        question: 'What sort of place this is?',
        updateEvent: (event: IEvent, type: IEventType) => ({ ...event, type })
    },
    {
    guid: uuidv4(),
    type: IQuestionType.Hours,
    question: 'At what hours?',
    updateEvent: (event: IEvent, from: string, to: string) => ({ ...event, startTime: from, endTime: to })
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Bool,
      question: 'Did you wear a mask?',
      updateEvent: (event: IEvent, maskOn: boolean): IEvent => ({ ...event, maskOn })
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Number,
      question: 'How many people were there with you?',
      condition: '> 0',
      updateEvent: (event: IEvent, numberOfPeople: number): IEvent => ({ ...event, numberOfPeople }),
      followUp: [
        {
          guid: uuidv4(),
          type: IQuestionType.People,
          question: 'Please fill in the people that you know were there',
          updateEvent: (event: IEvent, people: string): IEvent => ({ ...event }),
        }
      ]
    },
    {
      guid: uuidv4(),
      type: IQuestionType.Transportation,
      question: 'How did you get there?',
      updateEvent: (event: IEvent, transportation: ITransportationType): IEvent => ({ ...event, transportation }),
    }
  ]
}

  const [state, setState] = useState(initState);
  const [location, setLocation] = useState(null);
  return (
    <div className="App">
      <Container appState={state} setAppState={setState} location={location} setLocation={setLocation} startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
