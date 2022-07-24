import { ActionTypes } from "../actionTypes"

export const SaveUser = (data) => {
    return {
        type: ActionTypes.USER.SAVE_USER,
        payload: data
    }
}