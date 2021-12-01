import React, { Component } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./components/search/SearchBar"
import "./App.css"
import axios from "axios"
import MediaCard from "./components/card/MediaCard"
import Jumbotron from "./components/jumbotron/Jumbotron"
import Breakpoint, { BreakpointProvider } from "react-socks"

const chosen = (arr) => {
  const item = arr[Math.floor(Math.random() * arr.length)]
  return item
}

const foodChoices = [
  "Filipino",
  "Korean BBQ",
  "BBQ",
  "Sushi",
  "Ramen",
  "Mexican",
  "Hawaiian",
  "Sandwhiches",
  "Wings",
  "Curry",
  "Thai",
  "Seafood",
  "Burgers",
  "Pizza",
  "Salad",
  "Healthy",
  "Southern",
  "Soul Food",
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: "Let us help you decide",
      searchLocationQuery: "",
      results: [],
      errorState: null,
      loading: false,
    }
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery,
    })
    this.setState(
      {
        item: chosen(foodChoices),
      },
      () => {
        axios
          .get(
            `https://igpg6boue7.execute-api.us-west-1.amazonaws.com/dev/?url=${encodeURIComponent(
              `https://api.yelp.com/v3/businesses/search?location=${this.state.searchLocationQuery}&term=${this.state.item}`
            )}`,
            {
              //required authorization format from API
              headers: {
                //to get the API from the .env file use process.env.{variable name}
                Authorization:
                  "Bearer ZVex6dzsWTaMZqG2tz0veaxVfFmePcq5QWtXvzJqTQp53M11_NN3lueZn5gQYNDWlSJkzUweOJMTIRwyyYs4UPsHhJV3HhJB8m1WurHojHMgfy4MxTKz1zZLzazlXHYx",
              },
            }
          )
          .then((res) => {
            console.log(res.data.businesses)
            //change the state of App to reflect on the result we are given from the API
            //at the same time, setting the loading state to false
            this.setState({ results: res.data.businesses, loading: false })
          })
          .catch((err) => {
            //fire the errorState message if there is no information return from the API
            this.setState({
              errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
              loading: false,
            })
          })
      }
    )
  }
  handleClick() {}
  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="search-bar">
            <BreakpointProvider>
              <Jumbotron />
            </BreakpointProvider>
            <SearchBar
              onFormSubmit={this.onFormSubmit}
              item={this.state.item}
            />
          </div>
          <div className="results" id="result-section">
            <MediaCard
              data={this.state.results}
              errorState={this.state.errorState}
            />
          </div>
        </div>
      </div>
    )
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default App
