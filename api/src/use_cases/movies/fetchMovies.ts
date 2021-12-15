import { Movie } from "~/src/entities/movie";
import { MoviesRepository } from "./repositories/moviesRepository";

export const makeFetchMovies = (moviesService: MoviesRepository) => {
    return async (): Promise<Movie[]> => {
        const movies = await moviesService.fetchMovies();
        return movies;
    };
};
