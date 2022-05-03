import React from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import SearchBox from "../components/searchPage/SearchBox";



const DiscoverPage = () => {


    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="m-5 p-5"> <span className="myBold"> Yeni Mekanlar Keşfet</span></h2>
            <SearchBox />
            <CategoryItem
                type="Popüler"
            />
            <CategoryItem
                type="Tarihi Mekanlar"
            />
            <CategoryItem
                type="Unutulmuş Lezzetler"
            />
            <CategoryItem
                type="Doğal Güzellikler"
            />
        </div>
    )
}

export default DiscoverPage