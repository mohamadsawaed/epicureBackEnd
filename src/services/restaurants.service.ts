import { RestaurantsDal } from "../dal/restaurants.dal";
const moment = require('moment')

export class RestaurantsService {
 
 
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }
  public async restaurantId (id:Number){
    const dal = new RestaurantsDal();
    const res = dal.findResById(id);
    return res;

  }
  public async getPopularRestaurant()
  {
    const dal = new RestaurantsDal();
    const res = dal.getPopularRestaurant();
    return res;
  }
  public async dateAdd(){
    const dal = new RestaurantsDal();
    const res = dal.dateAdd();
    return res;

  }
  public async openClose (name:String){
    const dal = new RestaurantsDal();
    const res = dal.findResByName(name);
    return res;
   

  }

 
}
