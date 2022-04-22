import api from './api'
const api_url = "locations/"
class LocationService {
    getLocations() {
        return api().get(api_url)
    }
}

export default LocationService