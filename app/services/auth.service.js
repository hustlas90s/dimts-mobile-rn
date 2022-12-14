import { getData, storeData } from "../helpers/asyncStorage";
import { api } from "./axios";

export const Login = async (data) => {
    try {
        const res = await api.post("/api/token/", {
            username: data.username,
            password: data.password,
        });
        if (res) {
            await storeData("access_token", res.data.access);
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
        console.log("New Data: ", newData);
        const res = await api.post("/register/", newData);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
};
