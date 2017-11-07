import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { shuffle } from './helper.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: []
    };
  }

  async componentDidMount() {
    const url =
      'https://restcountries.eu/rest/v2/all?fields=name;flag;region;subregion';

    const countries = await axios.get(url)
      .then(res => res.data);

    const shuffled = shuffle(countries);

    const choices = shuffled.slice(0,4);

    this.setState({ choices });
    
  }

  render() {
    return (
      <div className="App">
        <Nav title="World Flags" />
        
      </div>
    );
  }
}

export default App;
