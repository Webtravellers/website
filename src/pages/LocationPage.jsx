import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Carousel from "../components/carousel/Carousel";
import LocationComment from "../components/comments/LocationComment.";
import CityService from "../services/cityService";
import LocationService from "../services/locationService";
import { useTranslation } from "react-i18next";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Button, Tooltip } from "reactstrap";
import UserService from "../services/userServices";
import { useSelector } from "react-redux";

const LocationPage = () => {
    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [location, setLocation] = useState({})
    const [cities, setCities] = useState([])
    const [comments, setComments] = useState(null)
    const userService = new UserService()
    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        const locationService = new LocationService()

        locationService.getById(id).then(res => {
            setLocation(res.data.data)
        })

        locationService.getLocationComments(id).then(res => {
            setComments(res.data.data)
        })

        const cityService = new CityService()
        cityService.getCities().then(res => {
            setCities(res.data.data)
        })
    }, [])

    let currentCity = null
    cities.forEach(city => {
        if (city._id === location.city) {
            currentCity = city
        }
    })


    const handleFavoiteList = () => {
        userService.addToFavoriteList(user._id, id)
    }
    console.log(user)
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className="w-75 mh-25 m-5" >
                <Carousel
                />
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column m-1">
                        <h1>{location.name}</h1>
                        <p className="text-muted">{currentCity ? currentCity.cityName : null}</p>
                        <div className="d-flex">
                            <p className="text-dark ">4,6 {t("location-page.rating")}</p>
                            <i className="fa fa-star p-1" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <Button disabled={!user} onClick={() => handleFavoiteList()}>
                            <BookmarkAddIcon />
                        </Button>

                    </div>
                </div>
                <div>
                    {location.desc}
                </div>
            </div>
            <div className="w-75 m-5">
                <h3>{t("location-page.comments")}</h3>
                {
                    comments?.map(comment => (
                        <LocationComment
                            firstname={comment.user.name}
                            lastname={comment.user.lastname}
                            comment={comment.comment}
                            time={comment.date}
                            photo={comment.user.photo}
                            score={comment.score}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default LocationPage