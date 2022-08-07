import React, { useState, useEffect } from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import LocationService from "../services/locationService";
import suggestionimg from "../assets/imgs/suggestionimg.png";
import UserInfo from "../components/home-page/UserInfo";
import { useNavigate } from "react-router";
import ForgottenFlavors from "../components/home-page/ForgottenFlavors.jsx";
import { Button } from "reactstrap";
import TopMuseums from "../components/home-page/TopMuseums";
import UserService from "../services/users";

import { useTranslation, Trans } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const popular = [];
  const muzeler = [];
  const [users, setUsers] = useState("")

  useEffect(() => {
    const locationService = new LocationService();
    const userService = new UserService();

    locationService.getLocations({}).then((res) => {
      setLocations(res.data.data);
      console.log(res.data.data)
    });

    userService.getUsers().then((res) => {
      setUsers(res.data.data)
    })

  }, []);


  const divideLocations = () => {
    for (let i = 0; i <= locations.length; i++) {
      popular.push(locations[i]);
      if (locations[i]?.type[0]?.name === "Müze") {
        muzeler.push(locations[i]);
      }
    }
  };
  divideLocations();
  console.log(users)
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="d-flex justify-content-center">
        {
          // Öneri için
        }
        <div className="suggestion-container d-flex flex-row align-items-center">
          <div className="suggestion-part">
            <h1 className="suggestion-h1-part">
              {t("home-page.suggestion-h1-title-part")}
            </h1>
            <div className="suggestion-desc-part">
              {t("home-page.suggestion-desc-part")}
            </div>
            <UserInfo userProfilePhoto="" />
          </div>

          <div className="suggestion-img-part">
            <img
              onClick={() => {
                navigate("/location/62bee19d5fc6d2f78d28f5c3");
              }}
              className="suggestionIMG cursor-pointer"
              src={suggestionimg}
              alt="suggestion"
            />
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5">
        {
          // Kategori için
        }

        <CategoryItem type={t("Popüler")} locations={popular} />
      </div>

      <div className="d-flex flex-column align-items-center pt-5 mt-5">
        {
          // Unutulmuş Tatlar için
        }
        <h1 className="home-page-h1">{t("home-page.forgotten-flavors-h1-part")}</h1>
        <div className="forgotten-flavors-home-page">
          {t("home-page.forgotten-flavors-desc-part")}
        </div>
        <ForgottenFlavors />
      </div>

      <div className="d-flex flex-row pt-5 mt-5">
        {
          // Top 10 Müze için
        }
        <div className="top-part">
          <h1 className="home-page-h1">
            {t("home-page.top-museums-h1-part")}
          </h1>
          <div className="top-part-home-page">
            {t("home-page.top-museums-desc-part")}
          </div>
          <Button className="category-item-button bg-dark text-light justify-self-end m-3">
            {t("home-page.top-museums-button-part")}
          </Button>
        </div>
        <div>
          <TopMuseums />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
