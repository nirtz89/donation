import React, { Dispatch, SetStateAction } from 'react';
import './Main.scss';
import Question from './Question';
import EventTimeline from './EventTimeline';
import { IAppState } from '../App';
import EventSummary from './Events/EventSummary';
import UserSummary from './UserSummary';

export interface IMainProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
}

const Main = (props: IMainProps) => {

  console.log(props.appState.days);

  const isCurrentEventFull = () => {
    let currEvent: any = null;
    if (props.appState.days[props.appState.currentDate]) {
      currEvent = props.appState.days[props.appState.currentDate].events.find((ev)=>ev.guid===props.appState.currentEvent) ?? undefined;
    }
    return currEvent && currEvent.currentQuestion === props.appState.questions.length;
  };
  console.log("IS CURRENT EVENT FINISHED? " + isCurrentEventFull());


  const isInqFinish = () => {
    // for (let day in props.appState.days) {
    //     if (!props.appState.days[day].done) {
    //         return false;
    //     }
    // }
    // return true;
    return false;
  }

  let event = props.appState.days[props.appState.currentDate] && props.appState.days[props.appState.currentDate].events.find(event => event!.guid === props.appState.currentEvent);
  return (
    <div className="Main">
        {isInqFinish() ? (<UserSummary appState={props.appState} />) :
        (
            <>
                <EventTimeline appState={props.appState} setAppState={props.setAppState} />
                <div className="QuestionWrapper">
                    {event && props.appState.questions[event.currentQuestion] ?
                    <Question question={props.appState.questions[event.currentQuestion]} {...props} />
                    :
                    isCurrentEventFull() ? <EventSummary {...props} event={event} /> : "Add a new event to start."
                    }
                </div>
            </>
        )
    }
    </div>
  );
};

export default Main;
