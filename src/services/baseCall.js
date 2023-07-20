import axios from "axios";
// const baseUrl = "http://localhost:5000";
const baseUrl = "https://web3-origin.onrender.com";
export const BASE_CALL = {
  post: async (url, payload) => await axios.post(baseUrl + url, payload),
  get: async (url) => await axios.get(baseUrl + url)
};
