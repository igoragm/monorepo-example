import axios from "axios";
import "regenerator-runtime";

describe("Character service", () => {
    const axiosInstance = axios.create();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should fetch all GoT characters", async () => {
        const result = await axiosInstance.get("https://thronesapi.com/api/v2/Characters");

        expect(result.status).toBe(200);
    });
});
