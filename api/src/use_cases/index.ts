import { makeFetchCharacters } from "./characters/fetchCharacters";
import { charactersService } from "../services";

const fetchCharacters = makeFetchCharacters(charactersService);

export { fetchCharacters };
