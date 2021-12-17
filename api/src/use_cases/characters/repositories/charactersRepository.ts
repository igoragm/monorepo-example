import { Character } from "../../../entities/character";

export class CharactersNotFoundError extends Error {}

export interface CharactersRepository {
    fetchCharacters(): Promise<Character[]>;
    fetchCharacterDetails(id: string): Promise<Character>;
}
