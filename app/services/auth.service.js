import { getData, storeData } from "../helpers/asyncStorage";
import jwt_decode from "jwt-decode";
import { api } from "./axios";

export const Login = async (data) => {
    try {
        const res = await api.post("/api/token/", {
            username: data.username,
            password: data.password,
        });
        console.log('Login response: ', res)
        if (res) {
            const id = jwt_decode(res.data.access).user_id;
            await storeData("access_token", res.data.access);
            await storeData("user_id", id);
            return { success: true };
        }
    } catch (error) {
        return { success: false };
    }
};
export const Signup = async (data) => {
    try {
        const newData = data;
        newData.role = "citizen";
        const res = await api.post("/register/", newData);
        // const res = await api.get("/clustering/");
        console.log("Signup response: ", res)
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
