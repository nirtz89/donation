import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import PickFirstDate from './pickFirstDate';
import './Home.scss';

const Home = () => {
    const history = useHistory();
    const [date, setDate] = useState(null);

    return (
        <div className="Home">
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>When was your Covid-19 test?</small>
            <PickFirstDate setDate={setDate}/>
            {date ?
                <Button variant="contained" color="primary" onClick={() => history.push( {pathname: '/inq', state: date} )}>
                                Start Inquiry
                </Button>
                : null }
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
        </div>
      );
    }

export default Home;
