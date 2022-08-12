import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import LocationCard from "./LocationCard";

const CategoryItem = (props) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const categoryType = props.type;
  const locs = props.locations.slice(0,5);
  console.log(locs);
  return (
    <div className="d-flex flex-column m-5">
      <h4 className="ml-5 myBold">{t(`discover-page.${categoryType}`)}</h4>
      <div className="d-flex">
        {locs.map(location => (
          <LocationCard
            key={location._id}
            id={location._id}
            photo={location.photos[0]}
            name={location.name}
          />
        ))}
      </div>
      <Button
        onClick={() => navigate("/filtering")}
        className="category-item-button w-25 bg-dark text-light justify-self-end m-3"
      >
        {t("category-item.button-part")}
      </Button>
    </div>
  );
};

export default CategoryItem;
