import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Carousel from "../components/carousel/Carousel";
import LocationComment from "../components/comments/LocationComment.";
import CityService from "../services/cityService";
import LocationService from "../services/locationService";

const LocationPage = () => {
    const { id } = useParams()
    const [location, setLocation] = useState({})
    const [cities, setCities] = useState([])



    useEffect(() => {
        const locationService = new LocationService()

        locationService.getById(id).then(res => {
            setLocation(res.data.data)
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
                            <p className="text-dark ">4,6 Puan</p>
                            <i className="fa fa-star p-1" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-column m-1">
                        <h4 className="m-4 ">İmkanlar</h4>
                        <div className="d-flex flex-row">
                            <i className="fa fa-car display-4 px-4"></i>
                            <i class="fa fa-cutlery display-4 px-4" aria-hidden="true"></i>
                            <i class="fa fa-bus display-4 px-4" aria-hidden="true"></i>
                            <i class="fa fa-tree display-4 px-4" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div>
                    {location.desc}
                </div>
            </div>
            <div className="w-75 m-5">
                <h3>Diğer kullanıcıların yorumları</h3>
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />

                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />
                <LocationComment
                    firstname="Melike Nur"
                    lastname="Aydemir"
                    comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facilis, atque iste at, fuga, velit quo doloremque non molestias minus incidunt totam temporibus unde."
                    time="20 m"
                />


            </div>

        </div>
    )
}

export default LocationPage