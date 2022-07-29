import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { newPostReducer } from "./reducers/postReducer";
import { userReducer, userUpdateReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    userUpdate: userUpdateReducer
    // user: userReducer,
    // newPost: newPostReducer
})

export default rootReducer