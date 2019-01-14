import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from "./Scroll";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ animals: users})});
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { animals, searchfield } = this.state;
    const filteredanimals = animals.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !animals.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1 green sans-serif   mt5 '>Best Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList animals={filteredanimals} />
            </Scroll>
        </div>
      );
  }
}

export default App;