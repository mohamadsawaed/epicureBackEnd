import {dishsService} from "../services/dishs.service";
import { Request, Response } from "express";

export class DishsController {
    public static async getDish(req: Request, res: Response) {
      const service = new dishsService();
      const restaurants = await service.getDish();
      return res.send(restaurants);
    }
  
    public static async createDish(req: Request, res: Response) {
      const params = req.body;
      const service = new dishsService();
      const restaurant = await service.createDish(params);
      return res.send(restaurant);
    }
  }