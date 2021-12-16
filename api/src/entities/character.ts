import { Expose } from "class-transformer";

export class Character {
    @Expose()
    title: string;
}
