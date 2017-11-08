import React, { Component } from 'react';

import axios from 'axios';
import { shuffle } from './helper.js';
import './App.css';

import Nav from './Nav';
import Flag from './Flag';
import Correct from './Correct';
import Incorrect from './Incorrect';
import ChoicesForm from './ChoicesForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      chosen: '',
      correct: false,
      incorrect: false,
      countries: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }


  //make call to API to get all countries
  async componentDidMount() {
    const url =
      'https://restcountries.eu/rest/v2/all?fields=name;latlng;flag;region;subregion';

    const countries = await axios.get(url).then(res => res.data);

    this.setState({ countries });

    this.shuffleAndSelect(countries)

  }

  shuffleAndSelect(countries) {
    //shuffle countries using helper shuffle function
    const shuffled = shuffle(countries);
    
    //select the first four countries of the shuffled array
    const choices = shuffled.slice(0, 4);

    //select the country flag to guess
    const chosen = choices[Math.floor(Math.random() * choices.length)];

    //set state for countries to choose from and country chosen
    this.setState({ choices, chosen });
  }

  handleClick(country) {
    if (country.name === this.state.chosen.name) {
      this.setState({correct: true, incorrect: false})
    } else {
      this.setState({incorrect: true})
    }
  }

  reset() {
    const countries = [...this.state.countries];
    this.setState({correct: false});
    this.shuffleAndSelect(countries);
  }

  render() {
    const correct = this.state.correct ? <Correct info={this.state.chosen} reset={this.reset}/> : '';
    const incorrect = this.state.incorrect ? <Incorrect /> : '';
    return (
      <div className="App">
        <Nav title="World Flags" />
        {correct}
        {incorrect}
        <ChoicesForm
          choices={this.state.choices}
          handleClick={this.handleClick}
        />
        <Flag flag={this.state.chosen.flag}/>
      </div>
    );
  }
}

export default App;
