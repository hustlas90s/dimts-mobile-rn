import axios from "axios";

export const api = axios.create({
    // baseURL: "http://10.0.0.1:8000"
    baseURL: "http://192.168.254.113:8000"
    // baseURL: "http://127.0.0.1:8000"
    // baseURL: "http://192.168.254.107:8000",
    // baseURL: "http://10.0.2.2:8000",
});
