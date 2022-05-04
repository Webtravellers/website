import React from "react"
import FilterLeftSide from "../components/filter-page/FilterLeftSide"
import FilterRightSide from "../components/filter-page/FilterRightSide"

const FilteringPage = () => {

    return (
        <div className="d-flex flex-row align-items-center">
            <FilterLeftSide />
            <FilterRightSide />
        </div>
    )
}

export default FilteringPage