import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import Button from "./components/button";
// import List from "./components/list/List.jsx";
import "./App.css";
import axios from "axios";

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
  renderEmptyState(props) {
    return (
      <h2 className="heading-tertiary">
        Hang tight! We are working on getting you the list of the best spots
        nearby!{" "}
      </h2>
    );
  }
  renderRestaurantInfo() {
    const List = this.state.results.map(result => {
      return (
        <div className="RestaurantInfo" key={result.id}>
          <img src={result.image_url} alt="" className="RestaurantInfo__img" />
          <h2 className="heading-tertiary RestaurantInfo__name">
            {result.name}
          </h2>

          <p className="RestaurantInfo__para">
            <FontAwesomeIcon
              icon="map-marker-alt"
              className="RestaurantInfo__icon"
              aria-label="address:"
            />
            {result.location.display_address[0]},{" "}
            {result.location.display_address[1]}
          </p>

          <p className="RestaurantInfo__para">
            <FontAwesomeIcon
              icon="phone"
              className="RestaurantInfo__icon"
              aria-label="phone number:"
            />
            {result.phone}
          </p>
          <p className="RestaurantInfo__reviewCount">
            {" "}
            Based on {result.review_count} Reviews
          </p>
          <a href={result.url} className="RestaurantInfo__website">
            More infomration on Yelp
          </a>
        </div>
      );
    });

    return <div className="RestuarantList__gallery">{List}</div>;
  }
  render() {
    return (
      <div className="App">
        <Button handleClick={this.handleClick} item={this.state.item} />
        <section className="RestuarantList">
          {this.state.results.length
            ? this.renderRestaurantInfo()
            : this.renderEmptyState()}
          {/*conditional rendering for error state - when this.state.errorState is not true*/}
          {!!this.state.errorState && <h1>{this.state.error}</h1>}
        </section>
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt);

export default App;
