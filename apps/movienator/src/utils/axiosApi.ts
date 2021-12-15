import axios from "axios";
import qs from "qs";

const axiosApi = axios.create({
    baseURL: "http://localhost:3030",
    paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
    },
    headers: {
        "Content-Type": "application/json"
    }
});

export { axiosApi };
