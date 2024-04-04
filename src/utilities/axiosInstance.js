import axios from "axios";
import { getAccessTokenAndTTLFromLocalStorage } from "./authUtils";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const accessTokenAndTTL = getAccessTokenAndTTLFromLocalStorage();
      if(accessTokenAndTTL) {
        const {accessToken} = accessTokenAndTTL
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (err) {
      console.error(err);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
