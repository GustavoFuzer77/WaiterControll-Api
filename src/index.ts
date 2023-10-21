import express from "express";
import http from "node:http";
import mongoose from "mongoose";
import createRoutes from "./router";
import path from "node:path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => {
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });
    const port = 3001;

    io.on("connect", (a) => {
      console.log("conectou");
    });

    server.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    createRoutes(app);
  })
  .catch((err) => console.log(err));
