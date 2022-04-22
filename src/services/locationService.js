import api from './api'
const api_url = "locations/"
class LocationService {
    getLocations() {
        return api().get(api_url)
    }

    addLocation(data) {
        return api().post(api_url, data)
    }
}

export default LocationService