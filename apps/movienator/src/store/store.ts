import { combineReducers, createStore } from "redux";
import { movies } from "./reducers/movies.reducer";

const initialState = {};

const rootReducer = combineReducers({
    movies
});

const store = createStore(rootReducer, initialState);
export default store;
