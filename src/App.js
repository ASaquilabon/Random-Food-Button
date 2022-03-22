import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUtensils,
  faSearchLocation,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/search/SearchBar";
import "./App.css";
import axios from "axios";
import MediaCard from "./components/card/MediaCard";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Breakpoint, { BreakpointProvider } from "react-socks";

function App() {
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
    "Chinese",
    "Japanese",
    "Soul Food",
  ];

  const [searchLocationQuery, setSearchLocationQuery] = useState("");
  const [item, setItem] = useState("");
  const [results, setResults] = useState([]);
  const [errorState, setErrorState] = useState(null);
  const [loading, setLoading] = useState(false);

  const scrollView = () => {
    const resultSection = document.getElementById("result-section");
    resultSection.scrollIntoView({ behavior: "smooth" });
  };
  const onFormSubmit = (searchLocationQuery) => {
    const randomFoodChoice =
      foodChoices[Math.floor(Math.random() * foodChoices.length)];
    setItem(`You Randomized ${randomFoodChoice}!`);
    setSearchLocationQuery(searchLocationQuery);
  };

  useEffect(() => {
    scrollView();
  }, [results]);
  useEffect(() => {
    if (item != "") {
      console.log(`This is the ${item}`);
      axios
        .get(
          `https://igpg6boue7.execute-api.us-west-1.amazonaws.com/dev/?url=${encodeURIComponent(
            `https://api.yelp.com/v3/businesses/search?location=${searchLocationQuery},ca&term=${item}`
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
          console.log(res.data.businesses);
          //change the state of App to reflect on the result we are given from the API
          //at the same time, setting the loading state to false
          setResults(res.data.businesses);
          setLoading(false);
        })
        .catch((err) => {
          //fire the errorState message if there is no information return from the API
          setErrorState(
            "Sorry we coudln't find information related to the location you search, do you want to try something else?"
          );
          setLoading(false);
        });
    }
  }, [item]);

  return (
    <div className="App">
      <div className="content">
        <div className="search-bar">
          <BreakpointProvider>
            <Jumbotron />
          </BreakpointProvider>
          <SearchBar onFormSubmit={onFormSubmit} item={item} />
        </div>
        <div className="results" id="result-section">
          <MediaCard data={results} errorState={errorState} />
        </div>
      </div>
    </div>
  );
}
library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt);

export default App;
