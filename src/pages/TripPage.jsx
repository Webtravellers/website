import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button } from "reactstrap";
import LocationService from "../services/locationService";
import TripService from "../services/tripService";
import { BiMap } from "../utils/map";

const TripPage = () => {
  const { tripId } = useParams();
  const {
    user: { _id: userId },
  } = useSelector((state) => state.auth);
  const [trip, setTrip] = useState({});
  const [locations, setLocations] = useState([]);
  const tripService = new TripService();
  const locationService = new LocationService();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;
    tripService.getTripByTripId(userId, tripId).then((res) => {
      setLoading(false);
      setTrip(res.data.data);
      console.log(res.data.data);
    });
    locationService.getLocations().then((res) => {
      setLocations(res.data.data);
      console.log(res.data.data);
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

  const handleAddLocation = (location) => {
    setLoading(true);
    tripService.addLocationToTrip(userId, tripId, { location });
    console.log(userId, tripId, { location });
  };

  const handleRemoveLocation = (locationId) => {
    setLoading(true);
    tripService.removeLocationFromTrip(userId, tripId, locationId);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>{trip?.name}</h3>
        <div>
          <h4> Locations that already in your trip</h4>
          {trip?.locations?.map((location) => (
            <p>{location.name}</p>
          ))}
        </div>

        <div>
          <h4> Browse All Locations To Add Your Trip</h4>
          {
                        locations?.map((location) => (
                            <div className="d-flex m-2 p-2 justify-content-center align-items-center">
                                <p>{location?.name}</p>
                                {
                                    trip?.locations?.some(x => x._id === location?._id) ? <Button onClick={() => handleRemoveLocation(location._id)} className="bg-danger"> - </Button>
                                        : <Button onClick={() => handleAddLocation(location._id)} className="bg-success"> + </Button>
                                }

                            </div>
                        ))
                    }
        </div>
        <div id="routerMap"></div>
      </div>
    </>
  );
};

export default TripPage;