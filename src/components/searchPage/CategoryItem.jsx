import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

const CategoryItem = (props) => {
    const navigate = useNavigate()
    const categoryType = props.type
    /* const imgList = props.imgList */
    return (

        <div className="d-flex flex-column m-5">
            <h4 className="ml-3 myBold">{categoryType}</h4>
            <div className="d-flex">
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image20.png")} alt="" />
                    <span>Place 1</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image21.png")} alt="" />
                    <span>Place 2</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image22.png")} alt="" />
                    <span>Place 3</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image23.png")} alt="" />
                    <span>Place 4</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image25.png")} alt="" />
                    <span>Place 5</span>
                </div>
            </div>
            <Button className="w-25 bg-dark text-light justify-self-end m-3">Daha Fazlası..</Button>
        </div>
    )
}

export default CategoryItem