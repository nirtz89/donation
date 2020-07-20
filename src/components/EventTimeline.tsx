import React from 'react';
import Event from './Event'
import './EventTimeline.scss';

function EventTimeline(props) {

  // TODO: make scroll always stick to the end

  return (
    <div className="EventTimeline">
        {[1,2,3,4,5,6,7,8].map((v)=><Event key={v} isCurrent={v===8} />)}
    </div>
  );
}

export default EventTimeline;
