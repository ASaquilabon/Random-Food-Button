import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Button from './components/button';
import List from './components/list/List.jsx';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: "irvine"
    };
  }


  render() {
    return (
      <div className="App">
       <Button />
        <List 
          searchLocationQuery = {this.state.searchLocationQuery}/> 
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default App;