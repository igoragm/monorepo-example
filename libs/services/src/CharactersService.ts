import BaseService from "./BaseService";

const endpoints = {
    characters: "/characters"
};

export default class CharactersService extends BaseService<typeof endpoints> {
    endpoints = endpoints;

    getCharacters(params: any) {
        console.log(params);
        return this.get(this.endpoint("characters"), { params: "testParam" });
    }
}
