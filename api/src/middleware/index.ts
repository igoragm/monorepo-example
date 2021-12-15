import commonMiddleWare from "./common";
import { Router } from "express";

type MiddleWare = (router: Router) => void;
export const applyMiddleware = (middlewareWrappers: MiddleWare[], router: Router): void => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

export { commonMiddleWare };
