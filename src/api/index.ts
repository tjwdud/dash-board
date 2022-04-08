import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";

const SERVER_URL = "http://localhost:8888";

export const getRequests = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/requests`);
    return res.data;
  } catch (error) {
    return error;
  }
};
