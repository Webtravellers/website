import api from "./api";
const url = 'users/'

class UserService {
    getUsers() {
        return api().get(url)
    }

    getUserById(userId) {
        return api().get(url + String(userId))
    }

}

export default UserService