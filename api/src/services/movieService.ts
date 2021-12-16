import { MoviesRepository } from "../use_cases/movies/repositories/moviesRepository";
import { ExternalService } from "../utils/externalService";

export class MoviesService implements MoviesRepository {
    constructor(private externalService: ExternalService) {
        console.log("movies service external api", this.externalService);
    }

    public async fetchMovies() {
        const url = "https://thronesapi.com/api/v2/Characters";
        const response = await this.externalService.get(url);
        return response as any;
    }
}
