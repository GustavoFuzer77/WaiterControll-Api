import { Router } from "express";
import { productController } from "../controllers/productController";
import { upload } from "../middleware/uploadMiddleware";

export const router = Router();

router.get("/products", productController.index);
router.post("/products", upload.single('image'), productController.store);

export const productsRoutes = router;
