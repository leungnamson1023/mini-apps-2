import React from 'react';
import Cell from './Cell';

const Row = ({ cells }) => (
  <tr>
  {cells.map((cell, i) => (
    <Cell key={`cell${i}`} {...cell} /> ))}
  </tr>
)

export default Row;
