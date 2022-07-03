import React, { useState, useEffect } from "react";
import LocationService from "../../services/locationService";
import TopMuseumCard from "./TopMuseumCard";

function createTopMuseumCard(museum) {
    console.log(museum)
    return(
        <TopMuseumCard 
            key = {museum._id}
            locations = {museum}
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
        let count = 0
        for (let i = 0; i <= locations.length; i++) {
            if (count > 11)
            {
                break
            }
            if (locations[i]?.type[0]?.name === "Müze") {
                muzeler.push(locations[i])
                count++
            }
        }
    }
    
    divideLocations()
    console.log(muzeler)

    return (
        <div className="top-museum-cards d-flex flex-row">
            {muzeler.map(createTopMuseumCard)}
        </div>
    )
}

export default TopMuseums