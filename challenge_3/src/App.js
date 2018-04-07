import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mineSweeperReducer from './reducers/mineSweeperReducer';
import Board from './containers/BoardContainer';
import MineSweeper from './MineSweeper';

const App = () => {
  const store = createStore(mineSweeperReducer);
  return (
    <Provider store={store}>
      <MineSweeper />
    </Provider>
  );
}

export default App;
