import React from "react";
import { useNavigate } from "react-router";

const TopMuseumCard = (props) => {
    const navigate = useNavigate()
    const locs = props.locations
    console.log(locs)

    return (

        <div className="d-flex flex-column m-1">
            <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs._id ) }} className="cursor-pointer hover-overlay top-museum-items" src={locs?.photos[0]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopMuseumCard