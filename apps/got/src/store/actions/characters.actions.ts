import { charactersService } from "../../services/characters";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_PENDING = "GET_CHARACTERS_PENDING";
export const GET_CHARACTERS_FULFILLED = "GET_CHARACTERS_FULFILLED";
export const GET_CHARACTERS_REJECTED = "GET_CHARACTERS_REJECTED";

export const getCharacters = params => ({
    type: GET_CHARACTERS,
    payload: charactersService.getCharacters(params),
    meta: params
});

export const GET_CHARACTER_DETAILS = "GET_CHARACTER_DETAILS";
export const GET_CHARACTER_DETAILS_PENDING = "GET_CHARACTER_DETAILS_PENDING";
export const GET_CHARACTER_DETAILS_FULFILLED = "GET_CHARACTER_DETAILS_FULFILLED";
export const GET_CHARACTER_DETAILS_REJECTED = "GET_CHARACTER_DETAILS_REJECTED";

export const getCharacterDetails = params => ({
    type: GET_CHARACTER_DETAILS,
    payload: charactersService.getCharacterDetails(params),
    meta: params
});
