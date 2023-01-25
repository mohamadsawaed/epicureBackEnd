import { DishsDal } from "../dal/dishs.dal";

export class dishsService {
    public async getDish() {
      const dal = new DishsDal();
      const res = await dal.findAll();
      return res;
    }
  
    public async createDish(restaurant: any) {
      const dal = new DishsDal();
      const res = dal.createDish(restaurant);
      return res;
    }
  }