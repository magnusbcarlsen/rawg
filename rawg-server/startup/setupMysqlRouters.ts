import express  from 'express';
import gameMysqlRouters  from '../routers/gameMysqlRouters';


const setupMysqlRouters = (app: express.Application) => {
    app.use("/games", gameMysqlRouters);
}

export default setupMysqlRouters;