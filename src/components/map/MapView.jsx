import React, { useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import { BiMap } from "../../utils/map";

const MapView = () => {
    const [zoom] = useQuery("z")
    const [coordinate] = useQuery("c")
    console.log(zoom);
    console.log(coordinate);
    const x = coordinate.split(",")
    const uluru = {
        lat: parseFloat(x[0]),
        lng: parseFloat(x[1])
    }
    useEffect(() => {
        let map = new BiMap();
        map.init(document.getElementById("MapView"), {
            center: uluru,
            zoom: parseInt(zoom)
        });
        map.addMarker(uluru)
    }, []);

    return (
        <div id="MapView"></div>
    )
}

export default MapView