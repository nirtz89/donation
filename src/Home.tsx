import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const StartClick = () => {
        history.push('/inq')
    }

    return (
        <div className="Home">
            <small style={{color: 'gray', marginTop: '32px', display: 'block', opacity: 0.5}}>Made with pride by the eSeal team for the Microsoft Hackathon 2020</small>
            <Button variant="contained" color="primary" onClick={StartClick}>
                            Start Inquiry
            </Button>
        </div>
      );
    }

export default Home;
