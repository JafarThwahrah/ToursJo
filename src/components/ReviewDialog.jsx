import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ReviewDialog(props) {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [tokens, setTokens] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [reviewAlertOpen, setReviewAlertOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [review, setReview] = useState();
  const [openModal, setOpenModal] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseReview = () => {
    setReviewAlertOpen(false);
  };

  useEffect(() => {
    setUserData([loginData?.data.user]);
    setTokens(loginData?.data.token);
  }, []);

  console.log(props);
  function handleRatingSubmit(event, tour_id) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("rating", value);
    data.append("tour_id", tour_id);
    data.append("review", review);
    data.append("user_id", userData[0].id);
    console.log(data.get("rating"));
    console.log(data.get("tour_id"));
    console.log(data.get("review"));
    console.log(data.get("user_id"));

    const axiosAuth = "Bearer " + tokens;
    axios.defaults.headers.common["Authorization"] = axiosAuth;
    axios
      .post("http://localhost:8000/api/rateandreview", data)
      .then((res) => {
        setOpen(true);
        console.log(res);
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCloseModal();
  }
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thanks for sharing your experiance!
        </Alert>
      </Snackbar>
      <span className="ms-4">uncalibrated</span>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <Box
          component="form"
          onSubmit={(e) => handleRatingSubmit(e, props.booked)}>
          <DialogTitle style={{ padding: "4rem" }}>
            How was your Adventure
          </DialogTitle>
          <DialogContent
            className="text-center"
            style={{
              paddingLeft: "4rem",
              paddingRight: "4rem",
            }}>
            <DialogContentText>Rate Your Journy</DialogContentText>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Rating
                className="text-center"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Review"
                multiline
                rows={4}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Button
        style={{ border: "none" }}
        variant="outlined"
        onClick={handleClickOpenModal}>
        {props.role == "Tourist" ? (
          <RateReviewOutlinedIcon
            style={{
              color: "#f15d30",
              marginLeft: "8px",
            }}></RateReviewOutlinedIcon>
        ) : (
          ""
        )}
      </Button>
    </div>
  );
}

export default ReviewDialog;
