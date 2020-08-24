import express from "express";
import yoRouter from "./yoRouter";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res, next) => {
	res.status(200).json({payload: "pong!"});
	//comment
	next();
});

apiRouter.use("/yo", yoRouter);

export default apiRouter;
