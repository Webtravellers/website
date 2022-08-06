import React, { useEffect } from "react";
import { Formik } from "formik";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import CityService from "../../services/cityService";
import LocationService from "../../services/locationService";
import LocationTypeService from "../../services/locationTypeService";

const FilterLeftSide = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [cities, setCities] = useState([]);
  const [types, setTypes] = useState([])
  const [selectedCities, setSelectedCities] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  const handleSelectedCity = (id) => {
    const index = selectedCities.indexOf(id)
    if (index > -1)
    {
      selectedCities.splice(index, 1)
      setSelectedCities(selectedCities)
    }
    else {
      setSelectedCities([...selectedCities, id])
    }
  }

  const handleSelectedType = (id) => {
    const index = selectedTypes.indexOf(id)
    if (index > -1)
    {
      selectedTypes.splice(index, 1)
      setSelectedTypes(selectedTypes)
    }
    else {
      setSelectedTypes([...selectedTypes, id])
    }
  }

  const handleFilterClick = () => {
    console.log(selectedCities, selectedTypes)
    navigate(`?city=${selectedCities.join(",")}&types=${selectedTypes.join(",")}`)
  }

  useEffect(() => {
    const cityService = new CityService();
    const typesService = new LocationTypeService()
    cityService.getCities().then((res) => {
      setCities(res.data.data);
    });
    typesService.getTypes().then((res) => {
      setTypes(res.data.data)
    })
  }, []);

  return (
    <div>
      <div className="d-flex flex-column p-5 my-filter-left">
        <article className="filter-group">
          <header className="card-header">
            <h3>Şehirler</h3>
          </header>
          <div id="brandCollapse">
            <div className="card-body overflow-auto filterMaxHeight">
              {cities.map((city) => (
                <div className="form-check my-2" key={city._id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => handleSelectedCity(city._id)}
                  />
                  <label
                    className="form-check-label"
                    for="{{'brandCheck' + brand.id}}"
                  >
                    {city.cityName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="filter-group">
        <header className="card-header">
            <h3>Türler</h3>
          </header>
          <div id="brandCollapse">
            <div className="card-body overflow-auto filterMaxHeight">
              {types.map((type) => (
                <div className="form-check my-2" key={type._id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => handleSelectedType(type._id)}
                  />
                  <label
                    className="form-check-label"
                    for="{{'brandCheck' + brand.id}}"
                  >
                    {type.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </article>
        <Button onClick={handleFilterClick}>
          Filtrele
        </Button>
        <div className="my-filter-left-bottom">
          <h3 className="p-5">Yöresel Tatlarını Denediniz mi?</h3>
          <div className="d-flex flex-column align-items-center">
            <img
              onClick={() => {
                navigate("/location");
              }}
              className="m-3 cursor-pointer hover-overlay"
              src={require("../../assets/imgs/yemek1.png")}
            />
            <strong>Kıygaşa Böreği</strong>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              onClick={() => {
                navigate("/location");
              }}
              className="m-3 cursor-pointer hover-overlay"
              src={require("../../assets/imgs/yemek2.png")}
              alt=""
            />
            <strong>Balaban </strong>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              onClick={() => {
                navigate("/location");
              }}
              className="m-3 cursor-pointer hover-overlay"
              src={require("../../assets/imgs/yemek3.png")}
              alt=""
            />
            <strong>Çipbörek</strong>
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              onClick={() => {
                navigate("/location");
              }}
              className="m-3 cursor-pointer hover-overlay"
              src={require("../../assets/imgs/yemek4.png")}
              alt=""
            />
            <strong>Yufkalı Büryan</strong>
          </div>
        </div>
        {/* </Formik> */}
        {/* </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default FilterLeftSide;
