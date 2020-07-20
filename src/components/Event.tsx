import React from 'react';
import './Event.scss';
import { Tooltip, Typography, withStyles, Button } from '@material-ui/core';

function Event(props) {

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12)
    },
  }))(Tooltip);

  return (
    <HtmlTooltip placement="top" arrow
    title={
      <React.Fragment>
        <Typography color="inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem.</Typography>
      </React.Fragment>
    }>
<Button className={`Event ${props.isCurrent ? 'current' : ''}`} onClick={props.onClick}>
  { props.event.type ?
  (<>{ props.event.type }<br/> {`${props.event.startTime}-${props.event.endTime}`}</>) : 'New Event'}</Button>
    </HtmlTooltip>
  );
}

export default Event;
