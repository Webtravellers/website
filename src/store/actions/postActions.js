import axios from "axios";
import { NEW_POST_FAIL, NEW_POST_REQUEST, NEW_POST_SUCCESS, CLEAR_ERRORS } from "../../constants/postConstants";


// New Post
export const addNewPost = (postData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_POST_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/post/new", postData, config);

        dispatch({
            type: NEW_POST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_POST_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}