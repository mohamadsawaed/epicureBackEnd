import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.get("/restaurantId/:id", RestaurantsController.restaurantId);
router.get("/getPopularRestaurant", RestaurantsController.getPopularRestaurant);
router.get("/dateAdd", RestaurantsController.dateAdd);

export default router;
