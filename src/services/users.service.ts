import { rejects } from "assert";
import bcrypt from "bcrypt"
import { response } from "express";
import { resolve } from "path";
import { Usersdal } from "../dal/users.dal";

export class UsersService{
    public  async login(args:any)
    {
        const dal= new Usersdal();
        const hashedPasword=await dal.getUserPassword(args);
        if (!hashedPasword) 
        return {status:"failure", message: "Incorrect username or password"}
    
        const Response=await bcrypt.compare(args.password ,hashedPasword)
        if (Response){
        return {status:"success",message: "welcome"}
        }
        return {status:"failure", message: "Incorrect username or password"}
    }

    public  async register(user:any ) {
        const dal=new Usersdal();

        const saltRounds=10;
        const isUserExist=await Usersdal.compareEmail(user)
        if (!isUserExist)
        return {status:"failure", message: "user already exists"}

     const hashPassword= await new Promise <string>((resolve,rejects)=>{
        bcrypt.hash(user.password,saltRounds, async function (err,hash) {
            resolve(hash);
        })
     })
     user["password"]=  hashPassword;
        const res=await dal.creatUser(user);
        return res;
    }
}
