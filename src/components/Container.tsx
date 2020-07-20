import React from 'react';
import Main from './Main';
import './Container.scss';
import AppCalendar from './AppCalendar';
import AppMap from './AppMap';

function addDays(date: Date, days: number) {
    return new Date(date.getTime() + days*24*60*60*1000);
}

function Container(props) {
    const startDate = addDays(new Date(), 5);
    const endDate = addDays(startDate, 10);

  return (
    <>
    <div className="Container">
      <AppCalendar start={startDate} end={endDate}/>
      <Main questions={props.questions} />
      <AppMap />
    </div>
    <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
    </>
  );
}

export default Container;
