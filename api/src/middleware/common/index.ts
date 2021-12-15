import cors from "cors";
import { Router } from "express";
import config from "../../services/config";

const configureCors = (router: Router): Router => {
    console.log("configuring cors", config.api.corsCrossOrigins);
    return router.use(
        cors({
            origin: config.api.corsCrossOrigins,
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs)
        })
    );
};

export default [configureCors];
