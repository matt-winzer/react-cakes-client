import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import CakeList from './components/CakeList'
import StudentList from './components/StudentList'
import CakeHeader from './components/CakeHeader'

class App extends Component {
  state = {
    cakes: [],
    students: [],
    activeItem: 'cakes'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  async componentDidMount() {
    const params = new URLSearchParams(window.location.search)
    const cakesUrl = params.get('cakes') || '/cakes.json'
    const studentsUrl = params.get('students') || '/students.json'

    const cakeResponse = await fetch(cakesUrl)
    const studentResponse = await fetch(studentsUrl)
    
    const { cakes } = await cakeResponse.json()
    const { students } = await studentResponse.json()

    this.setState({ cakes, students })
  }

  render() {
    const location = this.state.activeItem

    return (
      <div className="App">
        <Navbar activeItem={this.state.activeItem}
                handleItemClick={this.handleItemClick}
                />
        <CakeHeader />
        <Grid container className="main-container">
          {location === 'cakes' && <CakeList cakes={this.state.cakes} />}
          {location === 'students' && <StudentList students={this.state.students} />}
        </Grid>
      </div>
    );
  }
}

export default App;
