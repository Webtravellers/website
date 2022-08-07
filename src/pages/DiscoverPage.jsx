import React, { useState, useEffect } from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import SearchBox from "../components/searchPage/SearchBox";
import LocationService from "../services/locationService";
import { useTranslation } from "react-i18next";



const DiscoverPage = () => {
    const { t, i18n } = useTranslation();
    const [locations, setLocations] = useState([])
    const dogalGuzellikler = []
    const eglence = []
    const unutulmuşLezzetler = []
    const muzeler = []
    useEffect(() => {
        const locationService = new LocationService()
        locationService.getLocations({}).then(res => {
            setLocations(res.data.data)
        })
    }, [])

    const divideLocations = () => {
        for (let i = 0; i <= locations.length; i++) {
            if (locations[i]?.type[0]?.name === "Müze") {
                muzeler.push(locations[i])
            }
            else if (locations[i]?.type[0]?.name === "Doğal Güzellik") {
                dogalGuzellikler.push(locations[i])
            }
            else if (locations[i]?.type[0]?.name === "Eğlence") {
                eglence.push(locations[i])
            }
            else if (locations[i]?.type[0]?.name === "Unutulmuş lezzetler") {
                unutulmuşLezzetler.push(locations[i])
            }
        }


    }
    divideLocations()

    return (

        <div className="d-flex flex-column align-items-center">
            <h2 className="m-5 p-5"> <span className="myBold">{t("discover-page.myBold-part")}</span></h2>
            <SearchBox placeholder={t("search-box.placeholder-part")} data={locations} />
            <CategoryItem
                type="Popüler"
                locations={muzeler}
            />
            <CategoryItem
                type="Eğlence"
                locations={eglence}
            />
            <CategoryItem
                type="Müzeler"
                locations={muzeler}
            />
            <CategoryItem
                type="Unutulmuş Lezzetler"
                locations={unutulmuşLezzetler}
            />
            <CategoryItem
                type="Doğal Güzellikler"
                locations={dogalGuzellikler}
            />
        </div>
    )
}

export default DiscoverPage