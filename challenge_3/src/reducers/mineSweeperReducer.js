import store from './store';
import { INIT_BOARD } from '../actions/actions';

const mineSweeperReducer = (state = store, action) => {
  switch(action.type) {
    case INIT_BOARD;
      return state;

  default:
    return state;
  }
}

export default mineSweeperReducer;
