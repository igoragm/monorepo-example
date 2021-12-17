import { makeFetchCharacterDetails, makeFetchCharacters } from "./characters/fetchCharacters";
import { charactersService } from "../services";

const fetchCharacters = makeFetchCharacters(charactersService);
const fetchCharacterDetails = makeFetchCharacterDetails(charactersService);

export { fetchCharacters, fetchCharacterDetails };
