import React from 'react';
import './Sidebar.scss';
import AppMap from './AppMap';
import AppCalendar from './AppCalendar';
import Progressbar from './Progressbar';

function Sidebar(props) {
  return (
    <div className="Sidebar">
        <div className="Sidebar-top">
          <Progressbar days={props.appState.days}/>
          <AppCalendar start={props.startDate} end={props.endDate} days={props.appState.days} />
        </div>
        <div className="Sidebar-bottom">
          <AppMap />
        </div>
    </div>
  );
}

export default Sidebar;
