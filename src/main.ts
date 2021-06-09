require("dotenv").config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import pingRouter from "./routes/ping";
import registerRouter from "./routes/register";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.get("/", function (req: any, res: any) {
  res.send("200");
});
app.use("/ping", pingRouter);
app.use("/register", registerRouter);

app.listen(8000, () => {
  console.log(`server running on port 8000`);
});
