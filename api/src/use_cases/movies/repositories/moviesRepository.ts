import { Movie } from "../../../entities/movie";

export class MoviesNotFoundError extends Error {}

export interface MoviesRepository {
    fetchMovies(): Promise<Movie[]>;
}
