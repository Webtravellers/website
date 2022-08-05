import { ActionTypes } from "../actionTypes";
import axios from "axios";

export const SaveUser = (data) => {
  return {
    type: ActionTypes.USER.SAVE_USER,
    payload: data,
  };
};