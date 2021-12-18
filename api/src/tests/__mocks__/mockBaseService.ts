import { BaseService } from "../../services/baseService";
import mockAxios from "jest-mock-axios";

export function mockBaseService() {
    const baseService = Reflect.construct(BaseService, []);
    Reflect.set(baseService, "axios", mockAxios);
    return baseService;
}
