import { Router } from "express";
import { ingredientGroupController } from "../controllers/ingredientGroupController";

export const router = Router();

router.get("/ingredientsGroup", ingredientGroupController.index);
router.post("/ingredientsGroup", ingredientGroupController.store);
router.delete("/ingredientsGroup/:ingredientId", ingredientGroupController.remove);

export const ingredientGroupRoute = router;
