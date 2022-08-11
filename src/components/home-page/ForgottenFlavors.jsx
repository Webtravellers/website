import React, { useEffect, useState } from "react";
import ForgottenFlavorsCard from "./ForgottenFlavorsCard";
import forgottenFlavors from "./forgottenFlavors";
import LocationService from "../../services/locationService";

function createCard(flavor) {
    
    return(
        <ForgottenFlavorsCard 
        key = {flavor._id}
        name = {flavor.name}
        photos = {flavor.photos[0]}
        type = {flavor.food-type}
        />
    )
}

function ForgottenFlavors() {
    const [locations, setLocations] = useState([])
    const unutulmuşLezzetler = []
    useEffect(() => {
        const locationService = new LocationService()
        locationService.getDiscoverLocations({}).then(res => {
            setLocations(res.data.data)
        })
    }, [])

    const divideLocations = () => {
        for (let i = 0; i <= locations.length; i++) {
            if (locations[i]?.type[0]?.name === "Unutulmuş lezzetler") {
                unutulmuşLezzetler.push(locations[i])
            }
        }
    }
    divideLocations()
    console.log(unutulmuşLezzetler)
    return(
        <div className="forgotten-flavors d-flex flex-row">
            {unutulmuşLezzetler.map(createCard)}
        </div>
    )
}

export default ForgottenFlavors