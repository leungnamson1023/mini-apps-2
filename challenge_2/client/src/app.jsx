import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: false,
      formOne: {},
      formTwo: {},
      formThree: {},
    };
  }

  firstClick() {
    this.setState({ initial: !this.state.initial });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.firstClick()}> Click me! </button>
        <div>Form</div>
      </div>
    );
  }
}

export default App;
