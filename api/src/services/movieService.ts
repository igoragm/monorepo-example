import { MoviesRepository } from "../use_cases/movies/repositories/moviesRepository";
import { ExternalService } from "../utils/externalService";

export class MoviesService implements MoviesRepository {
    /**
     *
     */
    constructor(private externalService: ExternalService) {
        console.log("movies service external api", this.externalService);
    }

    public async fetchMovies() {
        console.log("THIS CONTEXT", this);
        const url =
            "https://en.wikipedia.org/w/api.php?format=xml&action=query&list=embeddedin&einamespace=0&eilimit=500&eititle=Template:Infobox_film";
        const response = await this.externalService.get(url);
        console.log(response);
        return response as any;
    }
}
