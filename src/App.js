import React, { Component } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    cakes: []
  }

  async componentDidMount() {
    const response = await fetch('/cakes.json')
    const cakes = await response.json()
    this.setState({
      cakes
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
