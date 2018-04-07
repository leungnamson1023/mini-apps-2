import mineSweeperReducer, { emptyBoard } from './mineSweeperReducer';
import INIT_BOARD from '../actions/actions';


describe('emptyBoard', () => {
  it('returns a board', () => {
    expect(Object.keys(emptyBoard(3)).length).toEqual(9);
  })
})


describe('checks for mines', () => {
  it('init board', () => {
    const action = {
      type: 'INIT_BOARD',
      size: 3,
      mineLocations: ['0, 1', '1, 1']
    };
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
 const newBoard = mineSweeperReducer(defStore, action);

    expect(newBoard.board).toBeDefined();
    expect(newBoard.board['0, 0'].hasMine).toEqual(false);
    expect(newBoard.board['0, 1'].hasMine).toEqual(true);
  });
});
