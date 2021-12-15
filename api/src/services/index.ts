import { MoviesRepository } from "../use_cases/movies/repositories/moviesRepository";
import { MoviesService } from "./movieService";
import { BaseService } from "./baseService";

const baseService = new BaseService();

const moviesService: MoviesRepository = new MoviesService(baseService);

export { moviesService };
