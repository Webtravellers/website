import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";


const TripContainer = (props) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const tripName = props.tripName
    const tripId = props.tripId
    return (
        <div className="d-flex">
            <h4 className="m-2">{tripName}</h4>
            <Button onClick={() => navigate(`${tripId}`)}>{t("trips-container.go-to-trip-button")}</Button>
        </div>
    )
}


export default TripContainer