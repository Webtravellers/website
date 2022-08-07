import React from "react";
import FilterBottomSide from "../components/filter-page/FilterBottomSide";
import FilterLeftSide from "../components/filter-page/FilterLeftSide";
import FilterRightSide from "../components/filter-page/FilterRightSide";

const FilteringPage = () => {
  return (
    <>
      <div className="d-flex">
        <FilterLeftSide />
        <FilterRightSide />
      </div>
    </>
  );
};

export default FilteringPage;
