import express from "express";
import {getConnection} from "typeorm";
import {Yo} from "../../entity/Yo";

const yoRouter = express.Router();

yoRouter.get("/get/:id", async (req, res) => {
	const yoRepo = getConnection(process.env.NODE_ENV).getRepository(Yo);
});

export default yoRouter;
