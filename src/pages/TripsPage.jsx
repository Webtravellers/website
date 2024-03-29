import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import NewTrip from "../components/trip-page/newTrip";
import TripContainer from "../components/trip-page/TripContainer";
import TripService from "../services/tripService";
import { useTranslation } from "react-i18next";

const TripsPage = () => {
  const { t, i18n } = useTranslation();
  const [newTrip, setNewTrip] = useState(false);
  const {
    user: { _id: userId },
  } = useSelector((state) => state.auth);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    const tripService = new TripService();
    tripService.getTripsByUserId(String(userId)).then((res) => {
      setTrips(res.data.data);
      console.log(trips);
    });
  }, [trips]);
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h3>{t("trips-page.h3")}</h3>
      {trips.map((trip) => (
        <TripContainer
          key={trip._id}
          tripName={trip.name}
          tripId={trip._id}
          date={trip.createdAt}
          locations={trip?.locations}
        ></TripContainer>
      ))}
      <Button onClick={() => setNewTrip(!newTrip)}>
        {" "}
        {t("trips-page.add-button")}
      </Button>
      <NewTrip
        newTrip={newTrip}
        setNewTrip={setNewTrip}
        userId={userId}
      ></NewTrip>
    </div>
  );
};

export default TripsPage;