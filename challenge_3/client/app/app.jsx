import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };
  }

  render() {
    return (
      <div>
        Minesweeper
      </div>
    );
  }
}

export default App;
