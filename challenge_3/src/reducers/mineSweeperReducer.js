import { store } from './store';
import { INIT_BOARD } from '../actions/actions';

const mineSweeperReducer = (state = store, action = { type: '' }) => {
  const board = {};
  switch (action.type) {
    case INIT_BOARD:
      for (let r = 0; r < 9; r += 1) {
        for (let c = 0; c < 9; c += 1) {
          const location = `${r}, ${c}`;
          board[location] = {};
          if (action.mineLocations.includes(location)) {
            board[location].hasMine = true;
          } else {
            board[location].hasMine = false;
          }
        }
      }
      return { board, ...state };
    default:
      return state;
  }
};

export default mineSweeperReducer;
