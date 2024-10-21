import express from "express";
import gameRouter from "../routers/gameMysqlRouter";
import genreRouter from "../routers/genreMysqlRouter";
import storeRouter from "../routers/storeMysqlRouter";
import platformRouter from "../routers/parent_platformMySqlRouter";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/games", gameRouter);
  app.use("/genres", genreRouter);
  app.use("/stores", storeRouter);
  app.use("/platforms/lists/parents", platformRouter);
};

export default setupMysqlRouters;