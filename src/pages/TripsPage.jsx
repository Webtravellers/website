import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import NewTrip from "../components/trip-page/newTrip";
import TripContainer from "../components/trip-page/TripContainer";
import TripService from "../services/tripService";


const TripsPage = () => {

    const [newTrip, setNewTrip] = useState(false)
    const { user: { _id: userId } } = useSelector((state) => state.auth);
    const [trips, setTrips] = useState([])

    useEffect(() => {
        if (newTrip) return
        const tripService = new TripService()
        tripService.getTripsByUserId(String(userId)).then(res => {
            setTrips(res.data.data)
            //console.log(res.data.data);
            console.log(trips);
        })
    }, [newTrip])
    return (
        <div className="d-flex flex-column w-50 justify-content-center align-items-center">
            <h3>Trips page</h3>
            {
                trips?.map(trip => (
                    <TripContainer tripName={trip.name} tripId={trip._id}>
                    </TripContainer>
                ))
            }
            <Button onClick={() => setNewTrip(!newTrip)}> New Trip</Button>
            <NewTrip newTrip={newTrip} setNewTrip={setNewTrip} userId={userId}></NewTrip>
        </div>
    )
}

export default TripsPage