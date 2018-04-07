import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mineSweeperReducer from './reducers/mineSweeperReducer';
import MineSweeper from './MineSweeper';
import BoardContainer from './containers/BoardContainer';

const randomMines = (num) => {
  let bombPositions = [];
  let count = 0;

  while (count < num) {
  let row = Math.floor(Math.random() * num);
  let col = Math.floor(Math.random() * num);
    if (!bombPositions.includes(([`${row}, ${col}`]))) {
      bombPositions.push(`${row}, ${col}`);
      count += 1;
    }
  }
  return bombPositions;
}

const initAction = {
  type: 'INIT_BOARD',
  size: 9,
  mineLocations: randomMines(9)
};

const App = () => {
  const store = createStore(mineSweeperReducer);
  store.dispatch(initAction);
  return (
    <Provider store={store}>
      <BoardContainer />
    </Provider>
  );
}

export default App;
