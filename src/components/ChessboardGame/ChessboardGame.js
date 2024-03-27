// src/components/ChessboardGame.js
import React, { useState } from 'react';
import Chessboard from './components/Chessboard';
import Rook from './components/Rook';
import Timer from './components/Timer';
import WinMessage from './components/WinMessage';

const ChessboardGame = () => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [rookPosition, setRookPosition] = useState({ x: 7, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const moveRook = (stepsLeft, stepsDown) => {
    if (!gameOver && playerTurn === 1) {
      const newPosition = { x: rookPosition.x - stepsLeft, y: rookPosition.y + stepsDown };
      setRookPosition(newPosition);

      if (newPosition.x === 0 && newPosition.y === 7) {
        setWinner(1);
        setGameOver(true);
      } else {
        setPlayerTurn(2);
      }
    } else if (!gameOver && playerTurn === 2) {
      const newPosition = { x: rookPosition.x - stepsLeft, y: rookPosition.y + stepsDown };
      setRookPosition(newPosition);

      if (newPosition.x === 0 && newPosition.y === 7) {
        setWinner(2);
        setGameOver(true);
      } else {
        setPlayerTurn(1);
      }
    }
  };

  const handleTimeout = (player) => {
    setWinner(player === 1 ? 2 : 1);
    setGameOver(true);
  };

  return (
    <div>
      {gameOver ? (
        <WinMessage winner={winner} />
      ) : (
        <>
          <Chessboard rookPosition={rookPosition} />
          <Rook />
          <Timer player={playerTurn} onTimeout={handleTimeout} />
          <button onClick={() => moveRook(1, 0)}>Move Left</button>
          <button onClick={() => moveRook(0, 1)}>Move Down</button>
        </>
      )}
    </div>
  );
};

export default ChessboardGame;
