import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { newPostReducer } from "./reducers/postReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    // user: userReducer,
    // newPost: newPostReducer
})

export default rootReducer