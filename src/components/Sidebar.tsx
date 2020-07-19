import React from 'react';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Sidebar-top">
            <h1>CORONAVIRUS</h1>
            <h2>Health Questionnaire</h2>
        </div>
        <div className="Sidebar-bottom">
             <img src="https://i.imgur.com/s78ftuR.png" style={{width:'100px', height: '100px', margin: '0 16px' }} alt=""/>
             <img src="https://i.imgur.com/h1jjzrC.png" style={{width:'80px', height: '80px', margin: '0 16px', position:'relative', top:'12.5px'}} alt=""/>
        </div>
    </div>
  );
}

export default Sidebar;
