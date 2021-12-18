import { Request, Response } from "express";

export const toJson = (res: Response, data: unknown, status = 200, _req?: Request): void => {
    res.status(status).json({ status, data });
};
