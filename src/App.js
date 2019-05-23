import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/search/SearchBar";
import "./App.css";
import axios from "axios";
import MediaCard from "./components/card/MediaCard";

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
  "hawaiian",
  "sandwhiches",
  "wings",
  "curry",
  "thai",
  "seafood",
  "burgers",
  "pizza",
  "salad", 
  "healthy",
  "southern",
  "soul"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Click to decide what to eat!",
      searchLocationQuery: null,
      results: [],
      errorState: null,
      loading: false
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
    this.setState(
      {
        item: chosen(foodChoices)
      },
      () => {
        axios
          .get(
            `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${
              this.state.searchLocationQuery
            }&term=${this.state.item}`,
            {
              //required authorization format from API
              headers: {
                //to get the API from the .env file use process.env.{variable name}
                Authorization:
                  "Bearer ZVex6dzsWTaMZqG2tz0veaxVfFmePcq5QWtXvzJqTQp53M11_NN3lueZn5gQYNDWlSJkzUweOJMTIRwyyYs4UPsHhJV3HhJB8m1WurHojHMgfy4MxTKz1zZLzazlXHYx"
              }
            }
          )
          .then(res => {
            console.log(res.data.businesses);
            //change the state of App to reflect on the result we are given from the API
            //at the same time, setting the loading state to false
            this.setState({ results: res.data.businesses, loading: false });
          })
          .catch(err => {
            //fire the errorState message if there is no information return from the API
            this.setState({
              errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
              loading: false
            });
          });
      }
    );
    console.log("form is submitting")
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          onFormSubmit={this.onFormSubmit}
          item={this.state.item}  
        />
        <h1>{this.state.item}</h1>
        <MediaCard 
          data={this.state.results} 
          errorState={this.state.errorState}
        />
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt);

export default App;
