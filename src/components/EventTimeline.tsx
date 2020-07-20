import React, { useRef } from 'react';
import Event from './Event'
import './EventTimeline.scss';

function EventTimeline(props) {

  const eventTimeLineRef = useRef<HTMLDivElement>(null);

  eventTimeLineRef.current?.scrollTo(9999, 0);
  return (
    <div className="EventTimeline" ref={eventTimeLineRef}>
        {[1,2,3,4,5,6,7,8].map((v)=><Event key={v} isCurrent={v===8} />)}
    </div>
  );
}

export default EventTimeline;
