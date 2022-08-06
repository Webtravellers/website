const google = window.google;
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();
console.log(directionsRenderer);
let map;
const initialOptions = {
  zoom: 11,
  center: {
    lat: 39.91,
    lng: 32.80
  }
}
export class BiMap {
  constructor() { }

  init(element, options = initialOptions) {
    map = new google.maps.Map(element, {
      zoom: options.zoom,
      center: options.center,
    });
    directionsRenderer.setMap(map);
  }

  addMarker(position) {
    const marker = new google.maps.Marker({
      position: position,
      map: map
    })
  }
  calculateAndDisplayRoute(wayPoints, mode) {
    const points = wayPoints.map((p) => {
      return {
        location: p.join(","),
        stopover: true,
      };
    });
    const opt = {
      origin: wayPoints[0].join(","),
      destination: wayPoints.at(-1).join(","),
      waypoints: points,
      optimizeWaypoints: true,
      travelMode: mode,
    };
    console.log(opt);
    directionsService
      .route(opt)
      .then((response) => {
        console.log(response);
        directionsRenderer.setDirections(response);
        this.render();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static MODE = {
    DRIVING: google.maps.TravelMode.DRIVING,
    WALKING: google.maps.TravelMode.WALKING,
    TRANSIT: google.maps.TravelMode.TRANSIT,
    BICYCLING: google.maps.TravelMode.BICYCLING,
  };
}
