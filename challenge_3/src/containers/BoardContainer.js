import { connect } from 'react-redux';
import Board from '../Board';

const mapStateToProps = (state) => {
  const boardSize = Math.sqrt(Object.keys(state.board).length);
  let tableBoard = [];

  for (let r = 0; r < 9; r += 1) {
    tableBoard[r] = [];
    for (let c = 0; c < 9; c += 1) {
      let location = `${r}, ${c}`;
      tableBoard[r][c] = state.board[location];
    }
  }
  return { tableBoard };
};

const Container = connect(mapStateToProps)(Board);
export default Container;
