import axios from "axios";
import queryString from "query-string";
import * as PATH_URL from "../constants/apiUrl";

const axiosClient = axios.create({
  baseURL: PATH_URL.BASE_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
);

export default axiosClient;
