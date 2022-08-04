import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Button } from "reactstrap";
import LocationService from "../services/locationService";
import TripService from "../services/tripService";
import { useTranslation } from "react-i18next";

const TripPage = () => {
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
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>{trip?.name}</h3>
      <div>
        <h4>{t("trip-page.h4-part1")}</h4>
        {trip?.locations?.map((location) => (
          <p>{location.name}</p>
        ))}
      </div>

      <div>
        <h4>{t("trip-page.h4-part2")}</h4>

        {locations?.map((location) => (
          <div className="d-flex m-2 p-2 justify-content-center align-items-center">
            <p>{location?.name}</p>
            {trip?.locations?.some((x) => x._id === location?._id) ? (
              <Button
                onClick={() => handleRemoveLocation(location._id)}
                className="bg-danger"
              >
                {" "}
                -{" "}
              </Button>
            ) : (
              <Button
                onClick={() => handleAddLocation(location._id)}
                className="bg-success"
              >
                {" "}
                +{" "}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPage;
