import axios from "axios";

export const fetch = axios.create({
  baseURL: "/api/v1",
  timeout: 60 * 1000,
  withCredentials: true,
});
