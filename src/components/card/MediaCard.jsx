import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: "inline-flex",
    width: 480,
    margin: "5px",
  },
  media: {
    height: 280,
  },
};

const MediaCard = (props) => {
  const { classes } = props;
  const List = props.data.map(result => {
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
        <Typography component="h2">
           {result.name}
        </Typography>
        <Typography component="p">
          <FontAwesomeIcon
            icon="map-marker-alt"
            className="RestaurantInfo__icon"
            aria-label="address:"
          />
        {" "} {result.location.display_address[0]},{" "}
          {result.location.display_address[1]}
          </Typography>
        <Typography component="p">
          <FontAwesomeIcon
            icon="phone"
            className="RestaurantInfo__icon"
            aria-label="phone number:"
          />
          {" "}
          {result.phone}
          {" "}
          Based on {result.review_count} Reviews
          </Typography>
        <a href={result.url} className="RestaurantInfo__website">
          More information on Yelp
        </a>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }
    );
  return <div className="RestaurantList__gallery">{List}</div>;
}


MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);