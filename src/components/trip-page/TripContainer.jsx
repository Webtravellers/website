import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";

const TripContainer = (props) => {
    const navigate = useNavigate()
    const tripName = props.tripName
    const tripId = props.tripId
    return (
        <div className="d-flex">
            <h4 className="m-2">{tripName}</h4>
            <Button onClick={() => navigate(`${tripId}`)}> Go to trip</Button>
        </div>
    )
}


export default TripContainer