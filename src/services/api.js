import axios from "axios";
import { CookieService, CookieTypes } from "./cookieService";

export default () => {
  const api = axios;
  
  axios.defaults.baseURL = window.location.hostname.includes("localhost") ? "http://localhost:5000/" : "https://bihatiraapi.herokuapp.com/";
  axios.defaults.headers.common["Authorization"] ="Bearer " + CookieService.get(CookieTypes.AUTH)?.token;
  return api;
};