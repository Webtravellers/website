import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Carousel from "../components/carousel/Carousel";
import LocationComment from "../components/comments/LocationComment.";
import CityService from "../services/cityService";
import LocationService from "../services/locationService";
import { useTranslation } from "react-i18next";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Button, Tooltip } from "reactstrap";
import UserService from "../services/userServices";
import { useSelector } from "react-redux";
import NewLocationCommentModal from "../components/comments/NewLocationCommentModal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const LocationPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [location, setLocation] = useState({});
  const [cities, setCities] = useState([]);
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState(false);
  const userService = new UserService();
  const { user } = useSelector((state) => state.auth);
  const uniqueComments = [];
  const uniqueScores = [];

  useEffect(() => {
    const locationService = new LocationService();

    locationService.getById(id).then((res) => {
      setLocation(res.data.data);
    });

    locationService.getLocationComments(id).then((res) => {
      setComments(res.data.data);
      
    });

    const cityService = new CityService();
    cityService.getCities().then((res) => {
      setCities(res.data.data);
    });
  }, []);

  let currentCity = null;
  cities.forEach((city) => {
    if (city._id === location.city) {
      currentCity = city;
    }
  });

  let avgRating = 0
  let sum = 0
  if (comments !== null) {
    comments.forEach((comment) => {
      if (!uniqueComments.includes(comment.user._id)) {
        uniqueComments.push(comment.user._id);
        uniqueScores.push(comment.score);
        sum = uniqueScores.reduce((a, b) => a + b, 0);
        avgRating = sum / uniqueComments.length
      }
    });
  }

  const handleFavoiteList = () => {
    userService.addToFavoriteList(user._id, id);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="w-75 mh-25 m-5">
        <Carousel />
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column m-1">
            <h1>{location.name}</h1>
            <p className="text-muted">
              {currentCity ? currentCity.cityName : null}
            </p>
            <div className="d-flex">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">{t("location-page.reviews")}</Typography>
                <Rating
                  className="mb-5"
                  name="read-only"
                  value={avgRating ? avgRating : 0}
                  precision={0.2}
                  readOnly
                />
              </Box>
            </div>
          </div>
          <div className="d-flex flex-column m-1">
            <Button disabled={!user} onClick={() => handleFavoiteList()}>
              <BookmarkAddIcon />
            </Button>
          </div>
        </div>
        <div>{location.desc}</div>
      </div>
      <div className="w-75 m-5">
        <h3>{t("location-page.comments")}</h3>
        <Button onClick={() => setNewComment(true)}>
          <i className="fa fa-comment"></i>
        </Button>
        <NewLocationCommentModal
          newComment={newComment}
          setNewComment={setNewComment}
        ></NewLocationCommentModal>
        {comments?.map((comment) => (
          <LocationComment
            key={comment._id}
            firstname={comment.user.name}
            lastname={comment.user.lastname}
            comment={comment.comment}
            time={comment.date}
            photo={comment.user.photo}
            score={comment.score}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
