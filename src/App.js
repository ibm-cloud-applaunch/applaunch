import React, { Component } from 'react';
import Intro from './components/intro/Intro.jsx';
import Features from './components/features/Features';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Intro />
        <Features/>
      </div>
    );
  }
}

export default App;
