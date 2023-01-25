import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.service";
const moment = require('moment')

export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }

  public static async createRestaurant(req: Request, res: Response) {
    const params = req.body;
    const service = new RestaurantsService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  }
  public static async restaurantId(req: Request, res: Response, next: any) {
    try {
      const id = Number(req.params.id);
      const service = new RestaurantsService();

      const data = await service.restaurantId(id);
      if (data) return res.status(200).send(data);

      res.status(404).send({ status: "invalid Id" });
    } catch (error) {
      next();
    }
  }
  public static async getPopularRestaurant(req: Request, res: Response){
    try {
      const service = new RestaurantsService();
      const data = await service.getPopularRestaurant();
      if (data) return res.status(200).send(data);
      res.status(404).send({ status: "not correct" });
    } catch (error) {
      
    }
  }
  public static async dateAdd (req: Request, res: Response){
    try {
      const service = new RestaurantsService();
      const data = await service.dateAdd();
      if (data) return res.status(200).send(data);
      res.status(404).send({ status: "not correct" });
   
      
    } catch (error) {
      
    }
  }
}
