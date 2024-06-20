import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.request.use((value) => {
  var accessToken = localStorage.getItem("auth:acess_token")

  if (accessToken) {
    value.headers.Authorization = `Bearer ${accessToken}`;
  }

  return value;
});


 