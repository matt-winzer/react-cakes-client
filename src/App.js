import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import CakeList from './components/CakeList'
import CakeHeader from './components/CakeHeader'

class App extends Component {
  state = {
    cakes: []
  }

  async componentDidMount() {
    const apiUrl = window.location.search ? window.location.search.slice(1) : '/cakes.json'
    const response = await fetch(apiUrl)
    const cakes = await response.json()
    this.setState({
      cakes
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <CakeHeader />
        <Grid container className="main-container">
          <CakeList cakes={this.state.cakes} />
        </Grid>
      </div>
    );
  }
}

export default App;
