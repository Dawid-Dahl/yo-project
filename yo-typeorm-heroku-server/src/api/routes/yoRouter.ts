import express from "express";
import {getConnection} from "typeorm";
import {Yo} from "../../db/entities/Yo";

const yoRouter = express.Router();

yoRouter.post("/post", async (req, res) => {
	try {
		const {exclamations} = req.body;

		const yoRepo = getConnection(process.env.NODE_ENV).getRepository(Yo);

		const yo = yoRepo.create();

		yo.exclamations = exclamations || 0;

		const insertresult = await yoRepo.save(yo);

		res.status(201).send(insertresult);
	} catch (e) {
		console.log(e);
	}
});

export default yoRouter;
