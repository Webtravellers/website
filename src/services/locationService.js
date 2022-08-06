import api from './api'
const api_url = "locations/"
class LocationService {
    getLocations(page = 1, size = 20) {
        return api().get(api_url + `?page=${page}&size=${size}`)
    }

    addLocation(data) {
        return api().post(api_url, data)
    }

    updateLocation(id, data) {
        return api().put(api_url + id, data)
    }

    getById(id) {
        return api().get(api_url + id)
    }

    deleteLocation(id) {
        return api().delete(api_url + id)
    }

    getLocationComments(id) {
        return api().get(api_url + id + '/comments')
    }
}

export default LocationService