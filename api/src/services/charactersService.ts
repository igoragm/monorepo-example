import { CharactersRepository } from "../use_cases/characters/repositories/charactersRepository";
import { ExternalService } from "../utils/externalService";
import * as routes from "./routes";

export class CharactersService implements CharactersRepository {
    constructor(private externalService: ExternalService) {}

    // No point in casting the return type to Character interface as I don't control the external API hence the return type of Promise<any>.
    // Generating the backend/service types from Swagger and including them as a dependency is one way how to approach this
    // https://biercoff.com/my-small-investigation-about-swagger-codegen-generation-in-typescript/
    public async fetchCharacters(): Promise<any> {
        const response = await this.externalService.get(routes.characters);
        return response;
    }

    public async fetchCharacterDetails(id: string): Promise<any> {
        const character = await this.externalService.get(`${routes.characters}/${id}`);
        const randomQuote = await this.externalService.get(routes.randomQuote);

        character.quote = randomQuote.content;
        return character;
    }
}
