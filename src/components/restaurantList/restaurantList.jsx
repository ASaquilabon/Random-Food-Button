import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Restaurant = (props) => {
 
    const List = props.data.map(result => {
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
    return <div className="RestaurantList__gallery">{List}</div>;
}
export default Restaurant;
