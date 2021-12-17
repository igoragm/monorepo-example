import { Request, Response } from "express";
import { fetchCharacterDetails, fetchCharacters } from "../use_cases";
import { toJson } from "./response";

export const getCharacters = async (req: Request, res: Response): Promise<void> => {
    toJson(res, await fetchCharacters());
};

export const getCharacterDetails = async (req: Request, res: Response): Promise<void> => {
    toJson(res, await fetchCharacterDetails(req.query.id as string));
};
