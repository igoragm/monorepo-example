import { axiosApi } from "@monorepo/utils/src/axiosApi";
import { Axios, AxiosRequestConfig } from "axios";

interface ServiceEndpoints {
    [key: string]: string;
}

export default abstract class Service<Endpoints extends ServiceEndpoints> {
    abstract readonly endpoints: Endpoints;
    protected readonly axios: Axios;

    protected endpoint(endpoint: keyof Endpoints): string {
        return this.endpoints[endpoint];
    }

    constructor() {
        console.log("starting base service");
        this.axios = axiosApi;
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
