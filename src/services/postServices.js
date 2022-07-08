import { CLEAR_ERRORS, NEW_POST_FAIL, NEW_POST_REQUEST, NEW_POST_SUCCESS } from "../constants/postConstants";
import api from "./api";
const api_url = "/posts"

class PostService {
    addNewPost(postData) {
        return (
            async (dispatch) => {
                try {

                    dispatch({ type: NEW_POST_REQUEST });
                    const config = { header: { "Content-Type": "application/json" } }
                    const { data } = await api.post(api_url, postData, config);

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
        )
    }

    clearErrors() {
        return (
            async (dispatch) => {
                dispatch({ type: CLEAR_ERRORS });
            }
        )
    }

}


export default PostService