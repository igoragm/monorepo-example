import BaseService from "./BaseService";

const endpoints = {
    movies: "/movies"
};

export default class MacherService extends BaseService<typeof endpoints> {
    endpoints = endpoints;

    getMovies(params: any) {
        console.log(params);
        return this.get(this.endpoint("movies"), { params: "testParam" });
    }
}
