import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import CakeList from './components/CakeList'
import CakeHeader from './components/CakeHeader'

class App extends Component {
  state = {
    cakes: [],
    students: [],
    activeItem: 'cakes'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  async componentDidMount() {
    const cakeApiUrl = window.location.search ? window.location.search.slice(1) : '/cakes.json'
    const studentApiUrl = '/students.json'

    const cakeResponse = await fetch(cakeApiUrl)
    const cakes = await cakeResponse.json()
    const studentResponse = await fetch(studentApiUrl)
    const students = await studentResponse.json()
    
    this.setState({
      cakes,
      students
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <Navbar activeItem={this.state.activeItem}
                handleItemClick={this.handleItemClick}
                />
        <CakeHeader />
        <Grid container className="main-container">
          <CakeList cakes={this.state.cakes} />
        </Grid>
      </div>
    );
  }
}

export default App;
