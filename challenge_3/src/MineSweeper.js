import React from 'react';
import Board from './Board';
import logo from './logo.svg';
import './App.css';

const MineSweeper = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    <Board />
    </div>
)

export default MineSweeper;
