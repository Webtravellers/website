import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button, Table } from "reactstrap";
import LocationService from "../services/locationService";
import TripService from "../services/tripService";
import { BiMap } from "../utils/map";
import { useTranslation } from "react-i18next";
import LocationContainer from "../components/trip-page/LocationContainer";

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

  const handleAddLocation = (location) => {
    setLoading(true);
    tripService.addLocationToTrip(userId, tripId, { location });
  };

  const handleRemoveLocation = (locationId) => {
    setLoading(true);
    tripService.removeLocationFromTrip(userId, tripId, locationId);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>{trip?.name}</h3>
        <div className="d-flex flex-column m-5">
          <h4 className="m-2">{t("trip-page.h4-part1")}</h4>
          <div className="d-flex justify-content-center">
            <div className="locationContainerInTrip"
            >
              {trip?.locations?.map((location) => {
                return (
                  <LocationContainer
                    id={location._id}
                    name={location.name}
                    photo={location.photos[0]}
                    desc={location.desc}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <Button className="m-3" onClick={() => navigate(`mapView`)}>See your trip in map</Button>
        <div className="m-5">
          <h4 className="m-2">{t("trip-page.h4-part2")}</h4>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Add Your Trip</th>
                </tr>
              </thead>
              <tbody>
                {locations.map(location => (
                  <tr>
                    <td className="locationInTable" onClick={() => navigate(`/location/${location._id}`)}>
                      <img className="imgInTable" src={location.photos[0]}></img><span className="m-4">{location.name}</span></td>
                    <td>{location.type.map(t => t.name).toString()}</td>
                    <td>{location.desc?.slice(0, 47)}...</td>
                    <td>
                      {
                        trip?.locations?.some(x => x._id === location?._id) ? <Button onClick={() => handleRemoveLocation(location._id)} className="bg-danger ml-4"> - </Button>
                          : <Button onClick={() => handleAddLocation(location._id)} className="bg-success ml-4"> + </Button>
                      }

                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>

  );
};

export default TripPage;
