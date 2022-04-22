import api from "./api";

const api_url = "location-types/"
class LocationTypeService {
    getTypes() {
        return api().get(api_url)
    }
}

export default LocationTypeService