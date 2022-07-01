import React, { useState, useEffect } from "react";
import LocationService from "../../services/locationService";
import TopMuseumCard from "./TopMuseumCard";

function createTopMuseumCard(museum) {
    return(
        <TopMuseumCard 
            key = {museum._id}
            type = {museum.type}
            locations = {museum.locations}
        />
    )
}

const TopMuseums = () => {
    const [locations, setLocations] = useState([])
    const muzeler = []
    useEffect(() => {
        const locationService = new LocationService()
        locationService.getLocations().then(res => {
            setLocations(res.data.data)
        })
    })

    const divideLocations = () => {
        for (let i = 0; i <= locations.length; i++) {
            if (locations[i]?.type[0]?.name === "Müze") {
                muzeler.push(locations[i])
            }
        }
    }
    divideLocations()

    return (
        <div>
            {muzeler.map(createTopMuseumCard)}
        </div>
    )
}

export default TopMuseums