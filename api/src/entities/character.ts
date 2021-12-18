import { Expose } from "class-transformer";

// Interface isn't being used that much as I don't have any complex use cases
export class Character {
    @Expose()
    id: number;

    @Expose()
    family: string;

    @Expose()
    fullName: string;

    @Expose()
    title: string;

    @Expose()
    imageUrl: string;

    @Expose()
    quote: string;
}
