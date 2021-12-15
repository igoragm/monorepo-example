import express, { Application, Router, Request, Response, NextFunction } from "express";
import config from "../services/config";

function wrapAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) {
    return function (req: Request, res: Response, next: NextFunction) {
        fn(req, res, next).catch(next);
    };
}

export default (expressApp: Application): void => {
    const internalRouter = express.Router();
    initLandingPage(internalRouter);

    expressApp.use(config.api.basePath, internalRouter);
};

const initLandingPage = (router: Router) => {
    router.get("/express_backend", (req, res) => {
        res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
    });
};
