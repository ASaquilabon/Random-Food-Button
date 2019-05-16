import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Button from './components/button';
import List from './components/list/List.jsx';
import './App.css';

const chosen = arr => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
};

const foodChoices = [
  "filipino",
  "korean bbq",
  "bbq",
  "sushi",
  "ramen",
  "mexican",
  "hawaiian"
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Click to decide what to eat!",
      searchLocationQuery: "irvine"
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      item: chosen(foodChoices)
    });
  };

  render() {
    return (
      <div className="App">
       <Button 
        handleClick = {this.handleClick}
        item = {this.state.item}
       />
        <List 
          searchLocationQuery = {this.state.searchLocationQuery}
          foodChoice = {this.state.item}
          /> 
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default App;