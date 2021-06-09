import RegisterController from "../controllers/register";
import express from "express";

const registerRouter = express.Router();

registerRouter
  .post("/", RegisterController);
  
registerRouter
  .get("/", function(req, res){
    res.send("get")
  });

export default registerRouter;
