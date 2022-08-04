import api from "./api";

const api_url = "trips/"
class TripService {

    getTripsByUserId(userId) {
        return api().get(`${api_url}${userId}`)
    }

    getTripByTripId(userId, tripId) {
        return api().get(`${api_url}${userId}/${tripId}`)
    }

    newTrip(userid, data) {
        return api().post(`${api_url}${userid}`, data)
    }

    addLocationToTrip(userId, tripId, data) {
        return api().post(`${api_url}${userId}/${tripId}/locations`, data)
    }

    removeLocationFromTrip(userId, tripId, locationId) {
        return api().delete(`${api_url}${userId}/${tripId}/locations/${locationId}`)
    }
}

export default TripService