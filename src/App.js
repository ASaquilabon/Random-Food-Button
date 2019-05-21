import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import Button from "./components/button";
import Restaurant from "./components/restaurantList/restaurantList"
import "./App.css";
import axios from "axios";
import MediaCard from "./components/card/MediaCard"
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
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Click to decide what to eat!",
      searchLocationQuery: "Irvine",
      results: [],
      errorState: null,
      loading: false
    };
  }

  handleClick = event => {
    event.preventDefault();
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
                  "Bearer 4PtF46O0ShJUAsA7FLHtACoydrlyDAaG_MYntvijYDCUGq4GebvL8jhkojNp-1__mJlYDKHAUPIz9Moo90k3LSjEEcr-RyYXipe5TK1sx-dLtM5G-Y4I0_E2y8vRXHYx"
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
  };
  
  render() {
    return (
      <div className="App">
        <Button handleClick={this.handleClick} item={this.state.item} />
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
