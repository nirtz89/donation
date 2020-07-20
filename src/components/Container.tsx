import React, { Dispatch, SetStateAction } from 'react';
import Main from './Main';
import './Container.scss';
import Sidebar from './Sidebar';
import moment from 'moment';
import { IAppState } from '../App';

export interface IContainerProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
    testDate: Date;
}

function Container(props: IContainerProps) {
    const endDate = props.testDate ? props.testDate : new Date();
    const startDate = moment(endDate).add(-13, 'days').toDate();

  return (
    <>
    <div className="Container">
      <Sidebar startDate={startDate} endDate={endDate} {...props} />
      <Main {...props}   />
    </div>
    <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
    <div className="logos">
        <img className="ms-logo" src="https://i.pinimg.com/originals/1f/2c/af/1f2cafdce7418699587e3467d045c455.png" alt=""/>
        <img className="gov-logo" src="https://upload.wikimedia.org/wikipedia/he/f/fb/Israeli_Ministry_of_Health_logo.png" alt=""/>
    </div>
    </>
  );
}

export default Container;
