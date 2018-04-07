import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mineSweeperReducer from './reducers/mineSweeperReducer';
import MineSweeper from './MineSweeper';
import BoardContainer from './containers/BoardContainer';

const initAction = {
  type: 'INIT_BOARD',
  size: 9,
  mineLocations: ['0, 1', '1, 1', '3, 3', '2, 1', '4, 3', '1, 5']
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
