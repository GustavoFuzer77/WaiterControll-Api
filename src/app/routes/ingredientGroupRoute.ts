import { Router } from "express";
import { ingredientGroupController } from "../controllers/ingredientGroupController";

export const router = Router();

router.get("/ingredientsGroup", ingredientGroupController.index);
router.post("/ingredientsGroup", ingredientGroupController.store);

export const ingredientGroupRoute = router;
