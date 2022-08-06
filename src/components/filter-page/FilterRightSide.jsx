import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useQuery from "../../hooks/useQuery";
import LocationService from "../../services/locationService";
import FilterBottomSide from "./FilterBottomSide";

const FilterRightSide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locations, setLocations] = useState([]);
  const [cities] = useQuery("city");
  const [types] = useQuery("types");
  const [page] = useQuery("page");
  const [totalPageSize, setTotalPageSize] = useState(0)

  useEffect(() => {
    const locationService = new LocationService();
    locationService
      .getLocations({ cities: cities, types: types, page: page })
      .then((res) => {
        console.log(res.data);
        setLocations(res.data.data);
        setTotalPageSize(res.data.totalPageSize)
      });
  }, [location.search]);

  return (
    <div>
      <div className="my-grid-cols-4 m-5 p-5">
        {locations.map((location) => (
          <div
            className="d-flex flex-column justify-content-center align-items-center bg-white rounded mb-0 mb-5"
            key={location._id}
          >
            <img
              onClick={() => {
                navigate("/location/" + location._id);
              }}
              className="m-3 cursor-pointer hover-overlay wh-200-150"
              src={location.photos[0]}
              alt=""
            />
            <p className="text-center">{location.name}</p>
          </div>
        ))}
      </div>
      <FilterBottomSide totalPageSize={Math.ceil(totalPageSize / 20)}/>

    </div>
  );
};

export default FilterRightSide;
