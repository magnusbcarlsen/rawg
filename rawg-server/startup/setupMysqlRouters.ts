import express  from 'express';
import gameMysqlRouters  from '../routers/gameMysqlRouters';


const setupMysqlRouters = (app: express.Application) => {
    app.use("/games", gameMysqlRouters);
    // app.use("/genres", genreRouters);
}

export default setupMysqlRouters;