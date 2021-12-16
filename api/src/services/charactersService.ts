import { CharactersRepository } from "../use_cases/characters/repositories/charactersRepository";
import { ExternalService } from "../utils/externalService";

export class CharactersService implements CharactersRepository {
    constructor(private externalService: ExternalService) {}

    public async fetchCharacters() {
        const url = "https://thronesapi.com/api/v2/Characters";
        const response = await this.externalService.get(url);
        return response as any;
    }
}
