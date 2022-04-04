import axios from "axios";
import { API_BASE_URL } from "configs/api.config";

export const fetch = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  timeout: 60 * 1000,
  withCredentials: true,
});
