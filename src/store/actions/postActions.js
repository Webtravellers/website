import api from "../../services/api";
import { NEW_POST_FAIL, NEW_POST_REQUEST, NEW_POST_SUCCESS, CLEAR_ERRORS } from "../../constants/postConstants";
import PostService from "../../services/postService";


// New Post
export const addNewPost = (userId, postData) => async (dispatch) => {
    dispatch({ type: NEW_POST_REQUEST });
    const postService = new PostService()
    postService.newPost(userId, postData)
        .then(res => {
            dispatch({ type: NEW_POST_SUCCESS });
        })
        .catch(err => {
            dispatch({
                type: NEW_POST_FAIL,
                payload: err?.response?.data?.message ?? "Hata var",
            });
        })
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}