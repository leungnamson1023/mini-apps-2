import React from 'react';

const Cell = ({ count, hasMine }) => (
  <td>{count} - {hasMine}</td>
)

export default Cell;
