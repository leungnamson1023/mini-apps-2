import React from 'react';
import Row from './Row'

const Board = ({ tableBoard }) => (
    <table>
      <tbody>
        {tableBoard.map((cells, i) => (
          <Row cells={cells} key={`row${i}`}/>
        ))}
      </tbody>
    </table>
  )

export default Board;
