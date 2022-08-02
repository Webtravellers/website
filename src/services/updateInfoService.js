import api from "./api"

const api_url = "/users"

class UpdateInfoService {
    updateUserProfile(userId, data) {
        return api().post(`${api_url}/${userId}/update`, data)
    }
}

export default UpdateInfoService 