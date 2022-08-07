import api from "./api"

const api_url = "/posts"

class PostService {
    newPost(userId, data) {
        return api().post(`${api_url}/${userId}`, data)
    }

    getPostsByUser(userId) {
        return api().get(`${api_url}/getbyuser/${userId}`)
    }

    getPostsByPostID(postID) {
        return api().get(`${api_url}/${postID}`)
    }
    handleLikeEvent(postId, userId) {
        return api().post(`${api_url}/${postId}/likes/${userId}`)
    }
    newCommentAtPost(postId, data) {
        return api().post(`${api_url}/${postId}/comments`, data)
    }
}

export default PostService 