import React, { useState, useEffect } from 'react';
import Slide from './slide.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Countdown.css';

const milliDays = 86400000;
const milliHours = 3600000;
const milliMin = 60000;
const milliSec = 1000;

// Set endDate to noon EST on 11/23/2022
const endDate = new Date(Date.UTC(2022, 10, 23, 17, 0, 0, 0));

export default function Countdown () {

  const [countdown, setCountdown] = useState('');

  const calculateCountdown = () => {
    let difference = endDate - Date.now();
    const days = Math.floor(difference / milliDays);
    difference %= milliDays;
    const hours = Math.floor(difference / milliHours);
    difference %= milliHours;
    const minutes = Math.floor(difference / milliMin);
    difference %= milliMin;
    const seconds = Math.floor(difference / milliSec);

    const dayString = days === 1 ? `${days} day` : `${days} days`;
    const hourString = hours === 1 ? `${hours} hour` : `${hours} hours`;
    const minuteString = minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
    const secondString = seconds === 1 ? `${seconds} second` : `${seconds} seconds`;

    setCountdown(`${dayString}, ${hourString}, ${minuteString}, and ${secondString}`);
  };

  useEffect(() => calculateCountdown(), []);

  useEffect(() => {
    const interval = setInterval(() => calculateCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="timer-content">
        <h2>HI BESTIE {<FavoriteIcon color="secondary" />}</h2>
        <h1 className="countdown">{countdown}</h1>
        <h2>before noon EST on November 23rd, 2022.</h2>
      </div>
      <hr/>
      <div className="slide">
        <img src={Slide} alt='Slide goes here.' className="img-fluid" />
      </div>
    </div>
  );
}