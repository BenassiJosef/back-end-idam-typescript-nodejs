import Ping from "../controllers/ping";
import express from "express";

let pingRouter = express.Router()

pingRouter.get("/", Ping)

export default pingRouter
