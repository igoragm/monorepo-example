import "regenerator-runtime";
import { CharactersService } from "../../services/charactersService";
import * as routes from "../../services/routes";
import { mockBaseService } from "../__mocks__/mockBaseService";
import { BaseService } from "../../services/baseService";

describe("Character service", () => {
    let baseService: BaseService;
    let charsService: CharactersService;

    beforeAll(() => {
        baseService = mockBaseService();
        charsService = new CharactersService(baseService);
    });
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should fetch all GoT characters", async () => {
        charsService.fetchCharacters();
        const spy = jest.spyOn(Reflect.get(baseService, "axios"), "get");
        expect(spy).toHaveBeenCalledWith(routes.characters, {});
    });

    it("should fetch a GoT character", async () => {
        const id = "7";
        charsService.fetchCharacterDetails(id);
        const spy = jest.spyOn(Reflect.get(baseService, "axios"), "get");
        expect(spy).toHaveBeenCalledWith(`${routes.characters}/${id}`, {});
    });
});
