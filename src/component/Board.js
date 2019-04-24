import React from 'react';
import Square from './Square';
import Knight from './Knight';

const  renderSquare = (x, y,[knightX, knightY]) => {
  const black = (x + y) % 2  === 1;
  const isKnightHear = knightX === x && knightY === y;
  const piece = isKnightHear ? <Knight/> : null;
  return <Square black={black}>{piece}</Square>
};


export default ({knightPosition}) =>{
  const style={width: '100%', height: '100%'};
  return(
    <div style={style}>
      {renderSquare(0,0,knightPosition)}
      {renderSquare(1,0,knightPosition)}
      {renderSquare(2,0,knightPosition)}
    </div>
  )
}
