import React, { Dispatch, SetStateAction } from 'react';
import './Sidebar.scss';
import AppMap from './AppMap';
import AppCalendar from './AppCalendar';
import Progressbar from './Progressbar';
import { IAppState } from '../App';

export interface ISideBarProps {
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
    location: any;
    setLocation: Dispatch<SetStateAction<any>>;
    startDate: Date;
    endDate: Date;
}

function Sidebar(props: ISideBarProps) {
  return (
    <div className="Sidebar">
        <div className="Sidebar-top">
          <Progressbar days={props.appState.days}/>
          <AppCalendar {...props} />
        </div>
        <div className="Sidebar-bottom">
          <AppMap location={props.location} setLocation={props.setLocation} />
        </div>
    </div>
  );
}

export default Sidebar;
