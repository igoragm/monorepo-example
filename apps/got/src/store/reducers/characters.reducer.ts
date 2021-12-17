import { FluxStandardAction } from "redux-promise-middleware";
import { ICharactersState } from "../../interfaces/IApplicationState";
import {
    GET_CHARACTERS_PENDING,
    GET_CHARACTERS_FULFILLED,
    GET_CHARACTERS_REJECTED,
    GET_CHARACTER_DETAILS_PENDING,
    GET_CHARACTER_DETAILS_FULFILLED,
    GET_CHARACTER_DETAILS_REJECTED
} from "../actions/characters.actions";

const initialState: ICharactersState = {
    characters: {
        isFetching: false,
        failed: false,
        data: []
    },
    characterDetails: {
        isFetching: false,
        failed: false,
        data: []
    }
};

export function characters(state = initialState.characters, action: FluxStandardAction) {
    switch (action.type) {
        case GET_CHARACTERS_PENDING:
            console.log("ACTION TYPE GET_CHARACTERS_PENDING", action);
            return {
                ...state,
                isFetching: true
            };

        case GET_CHARACTERS_REJECTED:
            console.log("ACTION TYPE GET_CHARACTERS_REJECTED", action);
            return {
                ...state,
                status: action.payload.status,
                isFetching: false,
                failed: true
            };

        case GET_CHARACTERS_FULFILLED:
            console.log("ACTION TYPE GET_CHARACTERS_FULFILLED", action);
            return {
                ...state,
                isFetching: false,
                failed: false,
                status: action.payload.status,
                data: [...action.payload.data]
            };

        default:
            return state;
    }
}

export function characterDetails(state = initialState.characterDetails, action: FluxStandardAction) {
    switch (action.type) {
        case GET_CHARACTER_DETAILS_PENDING:
            console.log("ACTION TYPE GET_CHARACTER_DETAILS_PENDING", action);
            return {
                ...state,
                isFetching: true
            };

        case GET_CHARACTER_DETAILS_REJECTED:
            console.log("ACTION TYPE GET_CHARACTER_DETAILS_REJECTED", action);
            return {
                ...state,
                status: action.payload.status,
                isFetching: false,
                failed: true
            };

        case GET_CHARACTER_DETAILS_FULFILLED:
            console.log("ACTION TYPE GET_CHARACTER_DETAILS_FULFILLED", action);
            return {
                ...state,
                isFetching: false,
                failed: false,
                status: action.payload.status,
                data: action.payload.data
            };

        default:
            return state;
    }
}
