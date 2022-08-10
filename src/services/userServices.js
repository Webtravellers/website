import api from "./api";
const url = 'users/'

class UserService {
    getUsers() {
        return api().get(url)
    }

    getUserById(userId) {
        return api().get(url + String(userId))
    }

    addToFavoriteList(id, locaitonId) {
        return api().post(`${url}${id}/favorites/${locaitonId}`)
    }

    handleFollow(id, data) {
        return api().post(`${url}${id}/follows/`, data)
    }
}

export default UserService