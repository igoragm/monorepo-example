import { moviesService } from "../../services/movies";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_FULFILLED = "GET_MOVIES_FULFILLED";
export const GET_MOVIES_REJECTED = "GET_MOVIES_REJECTED";

export const getMovies = params => ({
    type: GET_MOVIES,
    payload: moviesService.getMovies(params),
    meta: params
});
