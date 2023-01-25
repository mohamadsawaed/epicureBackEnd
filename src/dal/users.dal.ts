import Users from "../db/models/users";

export class Usersdal{
    public  async creatUser(user:any){
        user=new Users({
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password
        });
        // const respons=await Users.create(user);
      
        // return respons;
       const data=await new Promise <string>((resolve,rejects)=>
       { 
        user.save(function(err:any,results:any)
        {
            resolve (results);
        });
         })
        return data;
    }
    public  async getUserPassword(user:any ){
        const data=await Users.findOne({
            email:user.email,
        });
        return data?.password;
    } 
    public static async compareEmail(user:any){
        const data=await Users.findOne({
            email:user.email,
        });
        // if (data)
        // return true;

        if(data?.email===user.email){
            return true;

       }
        return false;
    }
}