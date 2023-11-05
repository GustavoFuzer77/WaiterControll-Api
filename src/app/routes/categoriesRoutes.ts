import { Router } from "express";

import { categoryController } from "../controllers/categoryController";
import { upload } from "../middleware/uploadMiddleware";

const router = Router();

router.get("/categories", categoryController.index);
router.post("/categories", upload.single('icon'), categoryController.store);
router.delete("/categories/:categoryId", categoryController.remove);
router.get("/categories/:categoryId/products", categoryController.show);

export const categoryRoute = router;
