import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import LocationService from "../../services/locationService";
import TripService from "../../services/tripService";
import { BiMap } from "../../utils/map";

const TripMapView = () => {
    const { t, i18n } = useTranslation();
    const { tripId } = useParams();
    const {
        user: { _id: userId },
    } = useSelector((state) => state.auth);
    const [trip, setTrip] = useState({});
    const [locations, setLocations] = useState([]);
    const tripService = new TripService();
    const locationService = new LocationService();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading) return;
        tripService.getTripByTripId(userId, tripId).then((res) => {
            setLoading(false);
            setTrip(res.data.data);
        });
        locationService.getLocations({}).then((res) => {
            setLocations(res.data.data);
        });
    }, [loading]);

    useEffect(() => {
        if (trip.locations) {
            let map = new BiMap();
            map.init(document.getElementById("routerMap"));
            if (trip.locations.length > 1)
                map.calculateAndDisplayRoute(
                    trip.locations.map((l) => l.location.coordinates),
                    BiMap.MODE.DRIVING
                );
        }
    }, [trip]);

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div id="routerMap"></div>
            </div>
        </>

    );
};

export default TripMapView;
