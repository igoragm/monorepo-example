import { Character } from "~/src/entities/character";
import { CharactersRepository } from "./repositories/charactersRepository";

export const makeFetchCharacters = (charactersService: CharactersRepository) => {
    return async (): Promise<Character[]> => {
        const characters = await charactersService.fetchCharacters();
        return characters;
    };
};

export const makeFetchCharacterDetails = (charactersService: CharactersRepository) => {
    return async (id: string): Promise<Character> => {
        const character = await charactersService.fetchCharacterDetails(id);
        return character;
    };
};
