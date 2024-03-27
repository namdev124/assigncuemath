// src/components/WinMessage/WinMessage.js
import React from 'react';

const WinMessage = ({ winner }) => {
  return <div>{winner === 1 ? 'Player 1 wins!' : 'Player 2 wins!'}</div>;
};

export default WinMessage;
