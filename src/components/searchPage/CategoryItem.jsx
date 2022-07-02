import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

const CategoryItem = (props) => {
    const navigate = useNavigate()
    const categoryType = props.type
    const locs = props.locations
    console.log(locs)

    return (

        <div className="d-flex flex-column m-5">
            <h4 className="ml-3 myBold">{categoryType}</h4>
            <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[0]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[0]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[0]?.name}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[1]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[1]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[1]?.name}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[2]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[2]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[2]?.name}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[3]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[3]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[3]?.name}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[4]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[4]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[4]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[5]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[5]?.name}</p>
                </div>
            </div>
            <Button className="category-item-button w-25 bg-dark text-light justify-self-end m-3">Daha Fazlası..</Button>
        </div>
    )
}

export default CategoryItem