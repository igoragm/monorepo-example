import { CharactersRepository } from "../use_cases/characters/repositories/charactersRepository";
import { ExternalService } from "../utils/externalService";

export class CharactersService implements CharactersRepository {
    constructor(private externalService: ExternalService) {}

    public async fetchCharacters() {
        const url = "https://thronesapi.com/api/v2/Characters";
        const response = await this.externalService.get(url);
        return response as any;
    }

    public async fetchCharacterDetails(id: string) {
        const url = `https://thronesapi.com/api/v2/Characters/${id}`;
        const character = await this.externalService.get(url);
        const randomQuote = await this.externalService.get("https://api.quotable.io/random");

        character.quote = randomQuote.content;
        return character as any;
    }
}
