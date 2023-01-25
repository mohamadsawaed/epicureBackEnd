import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      id:restaurant.id,
      name: restaurant.name,
      chef: restaurant.chef,
      image:restaurant.image,
      dateAdded:restaurant.dateAdded,
      workHours:restaurant.workHours,
      visits:restaurant.visits,
    });

    const response = await Restaurants.create(restaurant);
    const result = await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { restaurants: response._id },
    });
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }
  public findResById(id:Number)
  {
    return Restaurants.findOne({id:id});
  }

  public findResByName(name:String)
  {
    return Restaurants.findOne({name:name})//.findOne({$set: { workHours: Restaurants.workHours:[{}] }});
  }


  public getPopularRestaurant(){
    return Restaurants.aggregate([
      {
        "$sort":{
          visits:-1

        }
        
      },
      {
        "$limit":3
        
      }
    ])
  }
  public dateAdd(){
    return Restaurants.aggregate([
      {
        "$sort":{
          dateAdded:-1

        }
        
      },
      {
        "$limit":3
        
      }
    ])
  }
}
