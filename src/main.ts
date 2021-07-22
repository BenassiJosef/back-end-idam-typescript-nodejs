require("dotenv").config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import pingRouter from "./routes/ping";
import registerRouter from "./routes/register";
import registerVerifyRouter from "./routes/verify"

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.get("/", function (req: any, res: any) {
  res.send("200");
});
app.use("/ping", pingRouter);
app.use("/register", registerRouter);
app.use("/verify", registerVerifyRouter);


export const server = app.listen(8000, () => {
  console.log(`server running on port 8000`);
});

// process.on('SIGTERM', shutDown);
// process.on('SIGINT', shutDown);

let connections: any = [];

server.on('connection', connection => {
    connections.push(connection);
    connection.on('close', () => connections = connections.filter((curr:any) => curr !== connection));
});


export function shutDown() {
  server.close(() => {
      process.exit(0);
  });

  setTimeout(() => {
      process.exit(1);
  }, 10000);

  connections.forEach((curr : any) => curr.end());
  setTimeout(() => connections.forEach((curr: any) => curr.destroy()), 5000);
}