import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-61fed/us-central1/api",
  baseURL: "https://amazon-backend-whvs.onrender.com",
});

export {axiosInstance}