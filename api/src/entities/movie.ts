import { Expose } from "class-transformer";

export class Movie {
    @Expose()
    title: string;
}
