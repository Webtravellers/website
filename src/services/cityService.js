import api from './api'
const api_url = "cities/"
class CityService {
    getCities() {
        return api().get(api_url)
    }
}

export default CityService