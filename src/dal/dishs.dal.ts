import Dish from "../db/models/dish";


export class DishsDal {
    public async createDish(dish: any) {
      dish = new Dish({
        name: dish.name,
        description: dish.description,
        price:dish.price,
        id:dish.id

      });
      
    const response = await Dish.create(dish);
    return response;
    }
    public findAll() {
        return Dish.find();
      }
}