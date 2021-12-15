import { makeFetchMovies } from "./movies/fetchMovies";
import { moviesService } from "../services";

const fetchMovies = makeFetchMovies(moviesService);

export { fetchMovies };
