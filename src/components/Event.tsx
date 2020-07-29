import React from 'react';
import './Event.scss';
import { Button } from '@material-ui/core';

function Event(props) {
  return (
    <Button className={`Event ${props.isCurrent ? 'current' : ''}`} onClick={props.onClick}>
      { props.event.type && props.event.startTime && props.event.endTime ?
      (<>{ props.event.type }<br/> {`${props.event.startTime}-${props.event.endTime}`}</>) : 'New Event'}</Button>
    );
}

export default Event;
