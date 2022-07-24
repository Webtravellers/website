import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import LocationService from "../../services/locationService"

const FilterRightSide = () => {
    const navigate = useNavigate()
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const locationService = new LocationService()
        locationService.getLocations().then(res => {
            setLocations(res.data.data)
        })
    }, [])
    return (
        <div className="my-grid-cols-4 m-5 p-5">
            {locations.map(location => (
                <div className="d-flex flex-column justify-content-center align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location/" + location._id) }} className="m-3 cursor-pointer hover-overlay wh-200-150" src={location.photos[0]} alt="" />
                    <p className="text-center">{location.name}</p>
                </div>
            ))}


        </div>
    )
}

export default FilterRightSide