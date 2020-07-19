import React from 'react';
import Main from './Main';
import './Container.scss';
import Calendar from './Calendar';
import Map from './Map';

function Container() {
  return (
    <>
    <div className="Container">
      {/* <Sidebar /> */}
      <Calendar />
      <Main />
      <Map />
    </div>
    <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
    </>
  );
}

export default Container;
