// src/components/Chessboard/Chessboard.js
import React from 'react';
import Square from './components/Square';

const Chessboard = ({ rookPosition }) => {
  // Function to render squares
  const renderSquare = (x, y) => {
    const isRook = rookPosition.x === x && rookPosition.y === y;
    return <Square key={`${x}-${y}`} isRook={isRook} />;
  };

  // Function to render rows
  const renderRow = (y) => {
    const row = [];
    for (let x = 0; x < 8; x++) {
      row.push(renderSquare(x, y));
    }
    return <div key={y} className="board-row">{row}</div>;
  };

  // Function to render the entire chessboard
  const renderBoard = () => {
    const board = [];
    for (let y = 0; y < 8; y++) {
      board.push(renderRow(y));
    }
    return board;
  };

  return <div>{renderBoard()}</div>;
};

export default Chessboard;
