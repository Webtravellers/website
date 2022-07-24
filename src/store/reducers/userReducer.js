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