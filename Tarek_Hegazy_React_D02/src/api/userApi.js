import axios from "axios";
import qs from "qs";
const URL = import.meta.env.VITE_API_URL;

export const getUsersAPI = () => {
  return axios.get(`${URL}/users`);
};

export const getSingleUserAPI = (prams) => {
  const searchPram = qs.stringify(prams);
  return axios.get(`${URL}/users?${searchPram}`);
};
