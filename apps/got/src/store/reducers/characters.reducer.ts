import { FluxStandardAction } from "redux-promise-middleware";
import {
    GET_CHARACTERS_PENDING,
    GET_CHARACTERS_FULFILLED,
    GET_CHARACTERS_REJECTED
} from "../actions/characters.actions";

const initialState = {
    characters: {
        isFetching: false,
        failed: false,
        data: []
    }
};

export function characters(state = initialState, action: FluxStandardAction) {
    console.log("ACTION TYPE", action);
    switch (action.type) {
        case GET_CHARACTERS_PENDING:
            console.log("ACTION TYPE GET_CHARACTERS_PENDING", action);
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isFetching: true,
                    data: [...state.characters.data]
                }
            };

        case GET_CHARACTERS_REJECTED:
            console.log("ACTION TYPE GET_CHARACTERS_REJECTED", action);
            return {
                ...state,
                characters: {
                    ...state.characters,
                    status: action.payload.status,
                    isFetching: false,
                    failed: true,
                    data: [...state.characters.data]
                }
            };

        case GET_CHARACTERS_FULFILLED:
            console.log("ACTION TYPE GET_CHARACTERS_FULFILLED", action);
            return {
                ...state,
                characters: {
                    ...state.characters,
                    isFetching: false,
                    failed: false,
                    status: action.payload.status,
                    data: [...action.payload.data]
                }
            };

        default:
            console.log("ACTION TYPE DEFAULT", action.payload);
            return state;
    }
}
