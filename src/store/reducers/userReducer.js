import { ActionTypes } from "../actionTypes";


const initialState = {}

export function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.USER.SAVE_USER:
            return { ...payload }

        default:
            return { ...state };
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.USER_UPDATE_REQUEST:
        return { loading: true };
      case ActionTypes.USER_UPDATE_SUCCESS:
        return { loading: false, userInfo: action.payload, success: true };
      case ActionTypes.USER_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
      default:
        return state;
    }
  };
  