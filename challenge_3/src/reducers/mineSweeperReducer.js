import { INIT_BOARD } from '../actions/actions';

const defStore = {
  board: {
  },
  defaultCell: {
    hasMine: false,
    hasFlag: false,
    isOpen: false,
    count: 0
  },
  size: 9,
};

const emptyBoard = (boardSize) => {
  const board = {};
  for (let r = 0; r < boardSize; r += 1) {
    for (let c = 0; c < boardSize; c += 1) {
      const location = `${r}, ${c}`;
      board[location] = {...defStore.defaultCell};
    }
  }
  return board;
}

const mineSweeperReducer = (state = defStore, action = {type: ""}) => {
  switch (action.type) {
    case 'INIT_BOARD':
    const board = emptyBoard(action.size);
    action.mineLocations.forEach((location) => {
      board[location].hasMine = true;
    })
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

export {
  mineSweeperReducer as default,
  emptyBoard
}


