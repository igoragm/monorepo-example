import { AxiosRequestConfig } from "axios";

export interface ExternalService {
    get(service: string, params?: AxiosRequestConfig): Promise<Record<string, unknown>>;
}
