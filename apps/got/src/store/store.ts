import { combineReducers, createStore, applyMiddleware } from "redux";
import { connectRouter } from "connected-react-router";
import promiseMiddleware from "redux-promise-middleware";
import { characters, characterDetails } from "./reducers/characters.reducer";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    characters,
    characterDetails,
    router: connectRouter(history)
});

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
export default store;
