import React from 'react';
import Main from './Main';
import './Container.scss';
import AppCalendar from './AppCalendar';
import AppMap from './AppMap';

function Container(props) {
  return (
    <>
    <div className="Container">
      <AppCalendar />
      <Main questions={props.questions} />
      <AppMap />
    </div>
    <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
    </>
  );
}

export default Container;
