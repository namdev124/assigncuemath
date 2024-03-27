// src/components/Chessboard/Square.js
import React from 'react';

const Square = ({ isRook }) => {
  return <div className={`square${isRook ? ' rook' : ''}`}></div>;
};

export default Square;
