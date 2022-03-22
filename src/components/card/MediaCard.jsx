import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    display: "inline-flex",
    width: 480,
    margin: "5px",
  },
  media: {
    height: 300,
  },
};

const MediaCard = (props) => {
  const { classes } = props;
  const List = props.data.map((result) => {
    return (
      <Card className={classes.card} key={result.id}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={result.image_url}
            title={result.name}
            style={styles}
          />
          <CardContent>
            <h2>{result.name}</h2>
            <p>
              <FontAwesomeIcon
                icon="map-marker-alt"
                className="RestaurantInfo__icon"
                aria-label="address:"
              />{" "}
              {result.location.display_address[0]},{" "}
              {result.location.display_address[1]}
            </p>
            <p>
              <FontAwesomeIcon
                icon="phone"
                className="RestaurantInfo__icon"
                aria-label="phone number:"
              />{" "}
              {result.phone}{" "}
            </p>
            <p>Based on {result.review_count} Reviews</p>
            <a href={result.url} className="RestaurantInfo__website">
              Click for more information on Yelp
            </a>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  return <div className="RestaurantList__gallery">{List}</div>;
};

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
