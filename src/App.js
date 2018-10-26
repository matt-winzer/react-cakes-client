import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import CakeList from './components/CakeList'

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
        <Grid container className="main-container">
          <CakeList cakes={this.state.cakes} />
        </Grid>
      </div>
    );
  }
}

export default App;
