import { Request, Response } from "express";
import { fetchMovies } from "../use_cases";
import { toJson } from "./response";

export const getMovies = async (req: Request, res: Response): Promise<void> => {
    toJson(res, await fetchMovies());
};
