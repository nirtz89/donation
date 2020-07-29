import React, { Dispatch, SetStateAction } from 'react';
import Main from './Main';
import './Container.scss';
import Sidebar from './Sidebar';
import { IAppState } from '../App';

export interface IContainerProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
    startDate: Date;
    endDate: Date;
}

function Container(props: IContainerProps) {

  return (
    <>
    <div className="logo-container">
      <img src="/epdi_web_logo.png" alt="" style={{width:200}}/>
    </div>
    <div className="Container">
      <Sidebar {...props} />
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
