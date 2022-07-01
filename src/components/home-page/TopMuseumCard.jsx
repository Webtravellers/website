import React from "react";
import { useNavigate } from "react-router";

const TopMuseumCard = (props) => {
    const navigate = useNavigate()
    const categoryType = props.type
    const locs = props.locations

    return (

        <div className="d-flex flex-column m-5">
            <h4 className="ml-3 myBold">{categoryType}</h4>
            <div className="d-flex">
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[0]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[0]?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default TopMuseumCard