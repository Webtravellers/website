import React, { useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import { BiMap } from "../../utils/map";

const MapRouteView = () => {
    const [zoom] = useQuery("z")
    const [coordinate] = useQuery("c")
    console.log(zoom);
    console.log(coordinate);
    const coordinatePairs = coordinate.split("-").map(x => [x])
    console.log(coordinatePairs);
    const x = coordinatePairs[0][0].split(",")
    console.log(x);
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
        map.calculateAndDisplayRoute(coordinatePairs, BiMap.MODE.DRIVING)
    }, []);

    return (
        <div id="MapView"></div>
    )
}

export default MapRouteView