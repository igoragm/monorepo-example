import { FluxStandardAction } from "redux-promise-middleware";
import { GET_MOVIES_FULFILLED, GET_MOVIES_PENDING, GET_MOVIES_REJECTED } from "../actions/movies.actions";

const initialState = {
    movies: {
        isFetching: false,
        failed: false,
        data: []
    }
};

export function movies(state = initialState, action: FluxStandardAction) {
    console.log("ACTION TYPE", action);
    switch (action.type) {
        case GET_MOVIES_PENDING:
            console.log("ACTION TYPE GET_MOVIES_PENDING", action);
            return {
                ...state,
                movies: {
                    ...state.movies,
                    isFetching: true,
                    data: [...state.movies.data]
                }
            };

        case GET_MOVIES_REJECTED:
            console.log("ACTION TYPE GET_MOVIES_REJECTED", action);
            return {
                ...state,
                movies: {
                    ...state.movies,
                    status: action.payload.status,
                    isFetching: false,
                    failed: true,
                    data: [...state.movies.data]
                }
            };

        case GET_MOVIES_FULFILLED:
            console.log("ACTION TYPE GET_MOVIES_FULFILLED", action);
            return {
                ...state,
                movies: {
                    ...state.movies,
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
