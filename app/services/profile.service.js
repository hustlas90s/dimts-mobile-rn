import { getData, storeData } from "../helpers/asyncStorage";
import jwt_decode from "jwt-decode";
import { api } from "./axios";

export const GetProfile = async () => {
    try {
        // const token = await getData("access_token");
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODY5NjI1LCJpYXQiOjE2NzEwMzEyMjUsImp0aSI6ImJiYzA4ZGM5NzYxMDRjN2M4NGQ1NDgyMGZlMWRlZTdkIiwidXNlcl9pZCI6Mn0.FFgm7Z7iC3HHQf51pc5bzn3lQjj2V8Zjpxp4c_ACUEE";
        const id = jwt_decode(token).user_id;
        console.log(id);
        const res = await api.get(`/account/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
