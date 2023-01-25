import express from "express";
import chefsRoutes from "./chefs.routes";
import restaurantsRoutes from "./restaurants.routes";
import usersRoutes from "./users.routes";
import dishsRoutes from "./dish.routes"

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restaurants/", restaurantsRoutes);
router.use("/api/users/", usersRoutes);
router.use("/api/dishs/", dishsRoutes);

export default router;
