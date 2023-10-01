import { Router } from "express";

import { categoryController } from "../controllers/categoryController";

const router = Router();

router.get("/categories", categoryController.index);
router.post("/categories", categoryController.store);
router.get("/categories/:categoryId/products", categoryController.show);

export const categoryRoute = router;
