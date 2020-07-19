import React, { useState, useEffect } from 'react';
import './Progressbar.scss';

function Progressbar() {

    const [width, setWidth] = useState(0);

    useEffect(()=> {
        setTimeout(()=>setWidth(50),1000);
    },[])

  return (
    <>
        <div className="Progressbar">
            <div className="inner" style={{width:`${width}%`}}>

            </div>
        </div>
        <div className="Progressbar-text">
            {width}% Completed
        </div>
    </>
  );
}

export default Progressbar;
