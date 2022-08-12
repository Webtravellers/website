import React from "react";
import { useNavigate } from "react-router";
import Lazy from "../../hoc/Lazy";

const LocationCard = ({id, photo, name}) => {
    const navigate = useNavigate()
  return (
    <div className="category-item d-flex flex-column align-items-center p-3">
      <Lazy
        onClick={() => {
          navigate("/location/" + id);
        }}
        className="cursor-pointer hover-overlay discover-page-items"
        src={photo}
        alt=""
      />
      <p className="discover-page-item-text">{name}</p>
    </div>
  );
};

export default LocationCard