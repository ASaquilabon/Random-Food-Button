import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {

    constructor(props) {
        super(props);
        //props.state is linked with the result sending back from its child a.k.a the result we returned in SearchForm element
        this.state = {
        //leverage the state to store the information return from API to make loading faster
        results: [],
        errorState: null,
        loading: false,
        };
    }
    
    componentDidMount () {  
        this.getRestaurantsFromApi('Irvine');
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
            this.setState({
                results: [], 
            }, () => this.getRestaurantsFromApi(this.props.searchLocationQuery))
        }
    }
    renderEmptyState (props) {
        return (
            <h2 className = "heading-tertiary">Hang tight! We are working on getting you the list of the best spots nearby! </h2>
        )
    }
    //function to get information from API 
    getRestaurantsFromApi = (locationSearched) => {
        //UI feedback to tell the user when we are retrieving infromation from the API 
        this.setState({ loading: true })

        //using a proxy server cors-anywhere to get rid of the CROS probblem 
        //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
    }

    // renderRestaurantInfo () {
        
    //     const List = this.state.results.map((result) => {
            
    //         return (    
    //             <div 
    //                 className = "RestaurantInfo"
    //                 key = {result.id}
    //             >
    //                 <img src = {result.image_url} alt = "" className = "RestaurantInfo__img" />
    //                 <h2 className = "heading-tertiary RestaurantInfo__name">{result.name}</h2>
                    
    //                 <p className = "RestaurantInfo__para">
    //                     <FontAwesomeIcon 
    //                     icon = "map-marker-alt" 
    //                     className = "RestaurantInfo__icon"
    //                     aria-label = "address:" />
    //                     {result.location.display_address[0]}, {result.location.display_address[1]}
    //                 </p>
                    
    //                 <p className = "RestaurantInfo__para">
    //                     <FontAwesomeIcon 
    //                     icon = "phone" 
    //                     className = "RestaurantInfo__icon"
    //                     aria-label = "phone number:" />
    //                     {result.phone}
    //                 </p>
    //                 <p className = "RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p>
    //                 <a 
    //                     href= {result.url} 
    //                     className = "RestaurantInfo__website">
    //                         More infomration on Yelp
    //                 </a>
    //             </div>  
    //         );
    //     });

    //     return(
    //         <div className="RestuarantList__gallery">{List}</div>
    //     )
    // }
//     render() {
//         return ( 
//             <section className="RestuarantList">
//                 {this.state.results.length ? this.renderRestaurantInfo() :this.renderEmptyState()}
//                 {/*conditional rendering for error state - when this.state.errorState is not true*/}
//                 {!!this.state.errorState &&
//                     <h1>{this.state.error}</h1>
//                 }   
//             </section>
//         )}
// // }
// export default List
