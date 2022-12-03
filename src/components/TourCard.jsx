import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import "../styles/TourCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TourCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <></>
      <CardHeader
        avatar={
          <Avatar
            src={require(`../images/${props.userImage}`)}
            aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.userName}
        subheader={props.tourCreationDate}
      />
      <Rating
        name="half-rating-read"
        defaultValue={props.userRating}
        precision={0.5}
        readOnly
      />
      <CardMedia
        component="img"
        height="194"
        image={require(`../images/${props.heroImg}`)}
        alt="Paella dish"
      />
      {console.log(props.id)}
      <Link className="link" to={`/tourdetails/${props.id}`}>
        <CardHeader
          className="cardHeaderrr"
          title={props.destinationName}
          subheader={"Tour Date: " + props.tourDate}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.tourDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="wishListIcon" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
