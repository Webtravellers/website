import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const CategoryItem = (props) => {
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()
    const categoryType = props.type
    const locs = props.locations

    return (

        <div className="d-flex flex-column m-5">
            <h4 className="ml-5 myBold">{t(`discover-page.${categoryType}`)}</h4>
            <div className="d-flex">
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[0]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[0]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[0]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[1]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[1]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[1]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[2]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[2]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[2]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[3]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[3]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[3]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[4]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[4]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[4]?.name}</p>
                </div>
                <div className="category-item d-flex flex-column align-items-center">
                    <img onClick={() => { navigate("/location/" + locs[5]._id) }} className="m-3 cursor-pointer hover-overlay discover-page-items" src={locs[5]?.photos[0]} alt="" />
                    <p className="discover-page-item-text">{locs[5]?.name}</p>
                </div>
            </div>
            <Button className="category-item-button w-25 bg-dark text-light justify-self-end m-3">{t("category-item.button-part")}</Button>
        </div>
    )
}

export default CategoryItem