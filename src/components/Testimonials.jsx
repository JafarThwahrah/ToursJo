import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";

function Testimonial() {
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getTestimonials")
      .then((res) => {
        console.log(res);
        setTestimonials(res.data.Testimonials);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  function handleClickOffer() {
    navigate("/ourcars/s");
  }

  function handleContactUsBtn() {
    navigate("/contact");
  }

  return (
    <div>
      <Splide
        style={{ height: "100vh" }}
        options={{
          type: "loop",
          autoplay: "playing",
        }}>
        {testimonials?.map((ele) => {
          return (
            <SplideSlide className="slider1">
              <Container> </Container>

              <Card className="welcomeTextContainer">
                <img src={require(`../images/${ele.user_image}`)} alt="img" />
                <h1 className="textmain">{ele.user_name}</h1>
                <p className="textmain">{ele.review_description}</p>

                <RatingComponent>
                  <Rating
                    name="size-medium"
                    readOnly
                    defaultValue={ele.booked_rating}
                  />
                </RatingComponent>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

const TestTitle = styled.h1`
  font-size: 36px;
  color: white;
`;

const Wrapper = styled.div`
  margin: 4rem 0rem;
  padding: 1rem;
  background-color: grey;
`;
const Container = styled.div`
  z-index: 5;
  padding: 5rem;
  height: 20rem;
  background-color: black;
  opacity: 0.5;
`;
const Card = styled.div`
border-radius:2rem
overflow: hidden;
border-radius:2rem;
img{
  border-radius:50%;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  position: absolute;
  z-index:10;
  left:50%;
  bottom: 65%;
  transform: translate(-50% , 0%);
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
}
p{
  position: absolute;
  z-index:10;
  left:50%;
  bottom: -20%;
  transform: translate(-50% , 0%);
  color:white;
  width:50%;
  text-align: center;
  font-size:1rem;
  font-weight:600;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}

h1{
position: absolute;
z-index:10;
  left:50%;
  bottom: 10%;
  transform: translate(-50% , 0%);
  color:white;
  width:100%;
  text-align: center;
  font-size:1.5rem;
  font-weight:600;
  height:80%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`;

const RatingComponent = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -22%;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba (0, 0, 0, 0.5));
`;

export default Testimonial;
