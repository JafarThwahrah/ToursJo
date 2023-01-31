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
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
  const [tokens, setTokens] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isAddedFav, setIsAddedFav] = useState(false);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [userId, setUserId] = useState();
  useEffect(() => {
    setTokens(loginData?.data.token);
    setUserId(loginData?.data.user.id);
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.tour_id == props.id) {
        setIsAddedFav(true);
      }
    });
    console.log(isAddedFav);
  }, [favorites]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/api/getFavorites/${userId}`)
        .then((res) => {
          setFavorites(res.data.Wishlist);

          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("errrrrr");
    }
  }, [userId, isAddedFav]);

  const handleAddFav = (id) => {
    const axiosAuth = "Bearer " + tokens;
    const data = {
      tour_id: id,
      user_id: userId,
    };

    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post("http://localhost:8000/api/addtoWishlist", data)
      .then((res) => {
        console.log(res);
        setIsAddedFav(true);
        Swal.fire(
          "Success!",
          "Tour is added to your wishlist successfully.",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveFav = (id) => {
    const axiosAuth = "Bearer " + tokens;
    const data = {
      tour_id: id,
      user_id: userId,
    };

    axios.defaults.headers.common["Authorization"] = axiosAuth;

    Swal.fire({
      title: "Are you sure you want to Remove from wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8000/api/removefromFav", data)
          .then((res) => {
            console.log(res);
            setIsAddedFav(false);
            props.setCheckFavorite(!props.checkFavorite);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Removed!", "Removed from wishlist successfully.", "success");
      }
    });
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
      {userId && loginData?.data.user.user_role === "Tourist" ? (
        <CardActions disableSpacing>
          {!isAddedFav ? (
            <IconButton
              onClick={(e) => handleAddFav(props.id)}
              aria-label="add to favorites">
              <FavoriteIcon className="wishListIcon" />
            </IconButton>
          ) : (
            <IconButton
              onClick={(e) => handleRemoveFav(props.id)}
              aria-label="add to favorites">
              <FavoriteIcon className="wishListIconActive" />
            </IconButton>
          )}
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
}
