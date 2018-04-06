import mineSweeperReducer from './mineSweeperReducer';
import store from './store';
import INIT_BOARD from '../actions/actions';

describe('checks for mines', () => {
  it('init board', () => {
    const action = {
      type: INIT_BOARD,
      size: 9,
      mineLocations: ['0, 1'],
    };
    const newBoard = mineSweeperReducer(store, action);
    expect(newBoard.board['0, 0'].hasMine).toEqual(false);
    expect(newBoard.board).toBeDefined();
  });
});
