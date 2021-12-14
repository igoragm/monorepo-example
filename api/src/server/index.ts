// import { applyMiddleware } from './../middleware/index';
import express from 'express';
// import applyRoutes from './routes';
// import { errorMiddleware, commonMiddleWare } from '../middleware';

const expressApp = express();

// // COMMON MIDDLEWARE like CORS, SESSION, etc.
// applyMiddleware(commonMiddleWare, expressApp);

// // ROUTES Like content, auth, etc.
// applyRoutes(expressApp);

// // ERROR MIDDLEWARE Client/Server Errors 4xx, 5xx , etc.
// applyMiddleware(errorMiddleware, expressApp);

export default expressApp;
