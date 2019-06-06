import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';
import Button from "../button";
import Logo from "../../assets/Logo.png";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLocationQuery: "",
            item: this.props.item,
            clicked: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            searchLocationQuery: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchLocationQuery)
        this.setState({
            clicked: "Click here for nearby restaurants"
        })
    }
    render(){
        return (
            <div className = "searchForm">
                 <img id="logo" src={Logo}/>
                {/*add an event listener of form submit so the state only get set when the form is submitted*/}
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label 
                        htmlFor = 'location'
                        arialabel = 'Enter City, Address or Postal code'
                        className = 'searchForm-label'
                        >
                        <h1>Can't decide on what to eat?!</h1></label>
                        <input 
                        type = 'text'
                        id = 'location'
                        placeholder = 'Enter City, Address or Postal code'
                        value = {this.state.searchLocationQuery}
                        onChange = {this.handleSearchChange}
                        className = 'searchForm__input'
                    />
                    <Button />
                </form>
                <a href="#result-section">
                    <h1>{this.props.item}</h1>
                    <h1>{this.state.clicked}</h1>
                    </a>
            </div>
        );
    }
}

export default SearchBar