import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {
 
  public static async login(req: Request, res: Response) {
    const arg=req.body;
    const service = new UsersService();
    const user = await service.login(arg);
    return res.send(user);
  }

  public static async register(req: Request, res: Response) {
    try{
    const params = req.body;
    const service = new UsersService();
    const user = await service.register(params);
    return res.send(user);
    }
    catch{
        return res.status(500);
    }
  }
}
