import axios from "axios";
import { CookieService, CookieTypes } from "./cookieService";

export default () => {
  const api = axios;
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.headers.common["Authorization"] ="Bearer " + CookieService.get(CookieTypes.AUTH)?.token;
  return api;
};