import mineSweeperReducer from './mineSweeperReducer';
import store from './store';
import INIT_BOARD from '../actions/actions';

it('returns default state', () => {
  expect(mineSweeperReducer()).toBeDefined();
});

describe('checks for mines', () => {
  it('init board', () => {

    const action = {
      type: INIT_BOARD,
      size: 9,
      mineLocations: ['0, 1'],
    };

    const newBoard = mineSweeperReducer(store, action);
    console.log(newBoard.board['0, 0'].hasMine);
    expect(newBoard.board['0, 0'].hasMine).toEqual(false);
    expect(newBoard.board).toBeDefined();
  });
});
