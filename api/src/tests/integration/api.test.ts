import axios from "axios";
import * as routes from "../../services/routes";
import "regenerator-runtime";

describe("Character service", () => {
    const axiosInstance = axios.create();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should fetch all GoT characters", async () => {
        const result = await axiosInstance.get(routes.characters);

        expect(result.status).toBe(200);
    });

    it("should fetch a GoT character", async () => {
        const result = await axiosInstance.get(`${routes.characters}/0`);

        expect(result.status).toBe(200);
    });
});
