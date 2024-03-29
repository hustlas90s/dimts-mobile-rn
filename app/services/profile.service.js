import { getData, storeData } from "../helpers/asyncStorage";
import { api } from "./axios";

export const GetProfile = async () => {
    try {
        const token = await getData("access_token");
        const id = await getData("user_id");
        const res = await api.get(`/account/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const UpdateProfile = async (data) => {
    try {
        const token = await getData("access_token");
        const id = await getData("user_id");
        const res = await api.put(`/account/update/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const GetCitizenCases = async () => {
    try {
        const token = await getData("access_token");
        const res = await api.put(`/citizen_cases/`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return JSON.parse(res.data);
    } catch (error) {
        return error.response.data;
    }
}