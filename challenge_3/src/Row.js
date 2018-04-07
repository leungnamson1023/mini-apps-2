import React from 'react';
import Cell from './Cell';

const Row = ({ cells }) => (
  <tr>
  {cells.map((cell, i) => (
    <Cell cell={cell} key={`cell${i}`}/> ))}
  </tr>
)

export default Row;
