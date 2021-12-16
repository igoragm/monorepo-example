import { CharactersRepository } from "../use_cases/characters/repositories/charactersRepository";
import { CharactersService } from "./charactersService";
import { BaseService } from "./baseService";

const baseService = new BaseService();

const charactersService: CharactersRepository = new CharactersService(baseService);

export { charactersService };
