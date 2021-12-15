import axios from "axios";
import qs from "qs";

export const axiosApi = axios.create({
    baseURL: "http://localhost:3030",
    paramsSerializer(params: any) {
        return qs.stringify(params, { arrayFormat: "repeat" });
    },
    headers: {
        "Content-Type": "application/json"
    }
});
