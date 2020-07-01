import React from 'react';

import onlineIcon from '../../assets/icons/onlineIcon.png';
import closeIcon from '../../assets/icons/closeicon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" height="30" />
      </a>
      <a href="/"></a>
    </div>
  </div>
);

export default InfoBar;
