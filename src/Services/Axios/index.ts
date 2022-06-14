import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://covid-api.mmediagroup.fr",
  responseType: "json",
})

export default axiosInstance;