import React from 'react';
import Main from './Main';
import './Container.scss';
import Sidebar from './Sidebar';

function addDays(date: Date, days: number) {
    return new Date(date.getTime() + days*24*60*60*1000);
}

function Container(props) {
    const startDate = addDays(new Date(), +9);
    const endDate = addDays(startDate, 5);

  return (
    <>
    <div className="Container">
      <Sidebar calendarProps={{startDate, endDate}} appState={props.appState} />
      <Main questions={props.appState.questions} />
    </div>
    <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
    </>
  );
}

export default Container;
