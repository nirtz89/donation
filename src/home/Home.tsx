import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import PickFirstDate from './pickFirstDate';
import './Home.scss';

const Home = () => {
    const history = useHistory();
    const [date, setDate] = useState(null);

    return (
        <div className="Home-container">
            <div className="Home">
                <Typography variant="h1" gutterBottom>Welcome to your<br/>Epdimology Inquiry</Typography>
                <img src="/floatingPeople.gif" alt="covid19" className="welcome-img" />
                <Typography variant="h6" gutterBottom>When was your Covid-19 test?</Typography>
                <PickFirstDate setDate={setDate}/>
                <Button variant="contained" disabled={!date} color="primary" onClick={() => history.push( {pathname: '/inq', state: date} )}>Start Inquiry</Button>
            </div>
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
            <div className="logos">
                <img className="ms-logo" src="https://i.pinimg.com/originals/1f/2c/af/1f2cafdce7418699587e3467d045c455.png" alt=""/>
                <img className="gov-logo" src="https://upload.wikimedia.org/wikipedia/he/f/fb/Israeli_Ministry_of_Health_logo.png" alt=""/>
            </div>
        </div>
      );
    }

export default Home;
