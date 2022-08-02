import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { newPostReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    // newPost: newPostReducer
})

export default rootReducer