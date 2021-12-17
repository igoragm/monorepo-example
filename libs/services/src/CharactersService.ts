import BaseService from "./BaseService";

const endpoints = {
    characters: "/characters",
    character: `/characters/character`
};

export default class CharactersService extends BaseService<typeof endpoints> {
    endpoints = endpoints;

    getCharacters(params: any) {
        console.log(params);
        return this.get(this.endpoint("characters"));
    }

    getCharacterDetails(id: string) {
        return this.get(this.endpoint("character"), { id });
    }
}
