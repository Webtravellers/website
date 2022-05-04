import React from "react"
import { useNavigate } from "react-router"

const FilterRightSide = () => {
    const navigate = useNavigate()

    return (
        <div className="d-flex flex-row my-filter-rightside">
            <div className="d-flex flex-column align-items-center mr-5">
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image20.png")} alt="" />
                    <span>Place 1</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image21.png")} alt="" />
                    <span>Place 2</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image22.png")} alt="" />
                    <span>Place 3</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image23.png")} alt="" />
                    <span>Place 4</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image25.png")} alt="" />
                    <span>Place 5</span>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center mr-5">
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image20.png")} alt="" />
                    <span>Place 1</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image21.png")} alt="" />
                    <span>Place 2</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image22.png")} alt="" />
                    <span>Place 3</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image23.png")} alt="" />
                    <span>Place 4</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image25.png")} alt="" />
                    <span>Place 5</span>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image20.png")} alt="" />
                    <span>Place 1</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image21.png")} alt="" />
                    <span>Place 2</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image22.png")} alt="" />
                    <span>Place 3</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image23.png")} alt="" />
                    <span>Place 4</span>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded mb-0 mb-5">
                    <img onClick={() => { navigate("/location") }} className="m-3 cursor-pointer hover-overlay" src={require("../../assets/imgs/image25.png")} alt="" />
                    <span>Place 5</span>
                </div>
            </div>
        </div>
    )
}

export default FilterRightSide