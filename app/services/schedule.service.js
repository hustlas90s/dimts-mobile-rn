import { getData, storeData } from "../helpers/asyncStorage";
import { api } from "./axios";

export const GetSchedules = async () => {
    try {
        const token = await getData("access_token");
        const res = await api.get("/current_hearings/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return JSON.parse(res.data);
    } catch (error) {
        return JSON.parse(error.response.data);
    }
};
