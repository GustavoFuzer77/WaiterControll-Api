import { Router } from "express";
import { orderController } from "../controllers/orderController";

const router = Router();

router.get("/orders", orderController.index);
router.post("/orders", orderController.store);
router.patch("/orders/:orderId", orderController.update);
router.delete("/orders/:orderId", orderController.remove);

export const orderRoutes = router;
