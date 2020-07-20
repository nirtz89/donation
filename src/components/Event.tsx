import React from 'react';
import './Event.scss';

function Event(props) {

  return (
    <div className={`Event ${props.isCurrent ? 'current' : ''}`}>Event</div>
  );
}

export default Event;
