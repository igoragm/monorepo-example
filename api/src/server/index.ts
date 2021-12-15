import { applyMiddleware } from './../middleware/index';
import express from 'express';
import applyRoutes from './routes';
import { commonMiddleWare } from '../middleware';
import bodyParser from "body-parser";

const expressApp = express();

// COMMON MIDDLEWARE like CORS, SESSION, etc.
applyMiddleware(commonMiddleWare, expressApp);

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
    extended: true
}));

applyRoutes(expressApp);
// const corsSettings = {
//     origin: 'http://localhost:4000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) 
// }


export default expressApp;
