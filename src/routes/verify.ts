import VerifyController from "../controllers/verify";
import express from "express";

const registerVerifyRouter = express.Router();

registerVerifyRouter
  .post("/", VerifyController);
  
export default registerVerifyRouter;