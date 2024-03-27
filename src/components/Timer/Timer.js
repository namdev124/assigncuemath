// src/components/Timer/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ player, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft === 0) {
        onTimeout(player);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, player, onTimeout]);

  return <div>Player {player} Time Left: {timeLeft} seconds</div>;
};

export default Timer;
