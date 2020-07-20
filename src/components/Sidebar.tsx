import React from 'react';
import './Sidebar.scss';
import AppMap from './AppMap';
import AppCalendar from './AppCalendar';
import Progressbar from './Progressbar';

function Sidebar(props) {
  return (
    <div className="Sidebar">
        <div className="Sidebar-top">
          <Progressbar appState={props.appState}/>
          <AppCalendar start={props.startDate} end={props.endDate} />
        </div>
        <div className="Sidebar-bottom">
          <AppMap location={props.location} setLocation={props.setLocation} />
        </div>
    </div>
  );
}

export default Sidebar;
