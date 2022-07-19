import api from "./api"

const api_url = "/posts"

class PostService {
    newPost(userId, data) {
        return api().post(`${api_url}/${userId}`, data)
    }
}

export default PostService 