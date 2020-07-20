import React from 'react';
import Event from './Event'
import './EventTimeline.scss';

function EventTimeline(props) {

  return (
    <div className="EventTimeline">
        {[1,2,3,4].map((v)=><Event key={v} isCurrent={v===4} />)}
    </div>
  );
}

export default EventTimeline;
