import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';
import Button from "../button"

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchLocationQuery: ""
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
    }
    render(){
        return (
            <div className = "searchForm">
                {/*add an event listener of form submit so the state only get set when the form is submitted*/}
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label 
                        htmlFor = 'location'
                        arialabel = 'Enter City, Address or Postal code'
                        className = 'searchForm-label'
                        >
                        <h1>Randomizing Choices Near</h1></label>
                        <input 
                        type = 'text'
                        id = 'location'
                        placeholder = 'Enter City, Address or Postal code'
                        value = {this.state.searchLocationQuery}
                        onChange = {this.handleSearchChange}
                        className = 'searchForm__input'
                    />
                    <h1>{this.props.item}</h1>

                    <Button
                        type = 'submit'
                        className = 'searchForm__button'
                        >SEARCH!
                        <FontAwesomeIcon icon="search-location" className="searchForm__icon"/>
                    </Button>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar