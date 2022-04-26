import api from "./api";
const url = 'users/'

class UserService {
    getUsers() {
        return api().get(url)
    }
}

export default UserService