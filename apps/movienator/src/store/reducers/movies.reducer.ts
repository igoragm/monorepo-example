import { IMoviesState } from "../../interfaces/ApplicationState";
import { FluxStandardAction } from "redux-promise-middleware";
import { GET_MOVIES_FULFILLED, GET_MOVIES_PENDING, GET_MOVIES_REJECTED } from "../actions/movies.actions";

const initialState: IMoviesState = {
    isFetching: false,
    failed: false,
    list: []
};

export function movies(state = initialState, action: FluxStandardAction): IMoviesState {
    switch (action.type) {
        case GET_MOVIES_PENDING:
            return {
                ...state,
                isFetching: true
            };

        case GET_MOVIES_REJECTED:
            return {
                ...state,
                status: action.payload.response.status,
                isFetching: false,
                failed: true
            };

        case GET_MOVIES_FULFILLED:
            return {
                list: action.payload.data,
                status: action.payload.status,
                isFetching: false,
                failed: false
            };

        default:
            return state;
    }
}
