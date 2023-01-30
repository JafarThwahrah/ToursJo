import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import TourCard from "../components/TourCard";

const Wishlist = () => {
  const params = useParams();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/getwishwithtours/${params.id}`
      );
      console.log(response);
      setFavorites(response.data.Wishlist);
    };
    getData();
  }, []);
  console.log(favorites);
  // const displayUsers = favorites.map((tour) => {
  //   {
  //     return (
  //       <div class="col-md-4">
  //         <div class="m-2">
  //           <TourCard
  //             key={Math.random()}
  //             id={tour.id}
  //             userName={tour.user_name}
  //             destinationName={tour.destination_name}
  //             userImage={tour.user_image}
  //             userRating={tour.rating}
  //             tourDescription={tour.tour_description}
  //             tourDate={tour.tour_date}
  //             tourCreationDate={tour.created_at}
  //             heroImg={tour.hero_img}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  // });
  return (
    <>
      <section
        class="hero-wrap hero-wrap-2 js-fullheight d-flex align-items-center heroImgHome userProfileIMG"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/wish-list-elements-bullet-journal-page-template-with-check-boxes-numbers_192280-292.jpg?w=2000)",
        }}>
        <div class="container">
          <div class="row slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              {/* <h1 class="mb-0 bread">Wishlist</h1> */}
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row">{/* {displayUsers} */}</div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
