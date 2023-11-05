import { Router } from "express";
import { godController } from "../controllers/godControlle";

export const router = Router();

router.delete("/deleteAll", godController.remove);

export const godRoute = router;
