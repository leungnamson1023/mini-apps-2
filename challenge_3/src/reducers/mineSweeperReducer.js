import { INIT_BOARD } from '../actions/actions';

const defStore = {
  board: {
    '0, 0': {
      hasMine: false,
      hasFlag: false,
      isOpen: true,
    },
    '0, 1': {
      hasMine: true,
      hasFlag: false,
      isOpen: false,
    }
  },
  size: 9,
};

const mineSweeperReducer = (state = defStore, action = {type: ""}) => {
  switch (action.type) {
    case 'INIT_BOARD':
    const board = {};
      for (let r = 0; r < action.size; r += 1) {
        for (let c = 0; c < action.size; c += 1) {
          const location = `${r}, ${c}`;
          board[location] = {};
          board[location].hasMine = action.mineLocations.includes(location)
        }
      }
      return { ...state, board };
    default:
      return state;
  }
};

// const makeBoard = (action = {mineLocations: ['0, 1']}) => {
//   const board = {};
//   for (let r = 0; r < 9; r += 1) {
//     for (let c = 0; c < 9; c += 1) {
//       const location = `${r}, ${c}`;
//       board[location] = {};
//       if (action.mineLocations.includes(location)) {
//         board[location].hasMine = true;
//       } else {
//         board[location].hasMine = false;
//       }
//     }
//   }
//   return board;
// }

// console.log(makeBoard());

export default mineSweeperReducer;
