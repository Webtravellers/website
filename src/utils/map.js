const google = window.google
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();
console.log(directionsRenderer)
let map


export class BiMap {
    constructor() {

    }

    init(element) {
        map = new google.maps.Map(
            element,
            {
                zoom: 6,
                center: { lat: 41.85, lng: -87.65 },
            }
        );
    }

    render() {
        directionsRenderer.setMap(this.map)
    }

    calculateAndDisplayRoute(wayPoints, mode) {
        const points = wayPoints.map(p => {
            return {
                location: p.join(","),
                stopover: true
            }
        })
        const opt = {
            origin: wayPoints[0].join(","),
            destination: wayPoints.at(-1).join(","),
            waypoints: points,
            optimizeWaypoints: true,
            travelMode: mode
        }
        console.log(opt);
        directionsService.route(opt).then((response) => {
            directionsRenderer.setDirections(response);
        }).catch(err => {
            console.log(err);
        })
    }

    static MODE = {
        DRIVING: google.maps.TravelMode.DRIVING,
        WALKING: google.maps.TravelMode.WALKING,
        TRANSIT: google.maps.TravelMode.TRANSIT,
        BICYCLING: google.maps.TravelMode.BICYCLING
    }
}