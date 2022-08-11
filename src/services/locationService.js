import api from './api'
const api_url = "locations/"
class LocationService {
    
    getDiscoverLocations() {
        return api().get(api_url + "food")
    }

    getLocations(filter) {
        return api().get(api_url + `?page=${filter.page??1}&size=${filter.size??20}&city=${filter.cities??""}&types=${filter.types??""}`)
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

    newCommentAtLocation(id, data) {
        return api().post(api_url +  id + '/comments', data)
    }
}

export default LocationService