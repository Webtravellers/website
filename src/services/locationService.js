import api from './api'
const api_url = "locations/"
class LocationService {
    getLocations() {
        return api().get(api_url)
    }

    addLocation(data) {
        return api().post(api_url, data)
    }

    updateLocation(id, data) {
        return api().put(api_url+id, data)
    } 

    getById(id) {
        return api().get(api_url+id)
    }
}

export default LocationService