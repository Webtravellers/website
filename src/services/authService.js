import api from "./api"

const api_url = "/users"
class AuthService {
    signup(data) {
        return api().post(api_url + "/signup", data)
    }
    signin(data) {
        return api().post(api_url + "/signin", data)
    }

}

export default new AuthService() 