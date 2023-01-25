import { Router } from "express";
import { DishsController } from "../controllers/dishsController";

const router = Router();

router.get("/getDish", DishsController.getDish);
router.post("/createDish", DishsController.createDish);

export default router;
