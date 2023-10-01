import express from "express";
import mongoose from "mongoose";
import createRoutes from "./router";
import path from "node:path";

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => {
    const app = express();

    const port = 3001;
    app.listen(port, () => {
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
