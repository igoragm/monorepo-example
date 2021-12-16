import { Request, Response } from "express";
import { fetchCharacters } from "../use_cases";
import { toJson } from "./response";

export const getCharacters = async (req: Request, res: Response): Promise<void> => {
    toJson(res, await fetchCharacters());
};
