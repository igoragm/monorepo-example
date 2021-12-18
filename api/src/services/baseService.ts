import { ExternalService } from "../utils/externalService";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseService implements ExternalService {
    private axios!: AxiosInstance;

    /**
     *
     */
    constructor() {
        this.axios = axios.create();
    }

    public get(servicePath: string, params: AxiosRequestConfig = {}): Promise<Record<string, unknown>> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.axios.get(servicePath, params);
                resolve(response.data);
            } catch (e) {
                reject(e);
            }
        });
    }
}
