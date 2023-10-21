import { Router } from "express";
import { ingredientController } from "../controllers/ingredientController";
import { upload } from "../middleware/uploadMiddleware";

export const router = Router();

router.get("/ingredients", ingredientController.index);
router.post("/ingredients", upload.single("icon"), ingredientController.store);
router.delete("/ingredients/:ingredientId", ingredientController.remove);
router.patch(
  "/ingredients/:ingredientId",
  upload.single("icon"),
  ingredientController.update
);

export const ingredientRoute = router;
