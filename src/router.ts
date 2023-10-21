import { Express } from "express";
import { categoryRoute } from "./app/routes/categoriesRoutes";
import { orderRoutes } from "./app/routes/orderRoutes";
import { productsRoutes } from "./app/routes/productsRoutes";
import { ingredientRoute } from "./app/routes/ingredientRoute";
import { ingredientGroupRoute } from "./app/routes/ingredientGroupRoute";

export default function createRoutes(app: Express) {
  app.use("/api/v1", categoryRoute);
  app.use("/api/v1", orderRoutes);
  app.use("/api/v1", productsRoutes);
  app.use("/api/v1", ingredientRoute);
  app.use("/api/v1", ingredientGroupRoute);
}
