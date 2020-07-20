import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import PickFirstDate from './pickFirstDate';
import './Home.scss';

const Home = () => {
    const history = useHistory();

    const StartClick = () => {
        history.push('/inq')
    }

    return (
        <div className="Home">
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>When did u have your Covid-19 test?</small>
            <PickFirstDate />
            <Button variant="contained" color="primary" onClick={StartClick}>
                            Start Inquiry
            </Button>
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
        </div>
      );
    }

export default Home;
