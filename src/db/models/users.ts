import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,

  },
  email:{
    type:String,
    required:true,
  },
  password:
  {
    type:String,
    required:true,
  }
//   id:
//   {
//     type:Number,
//     required:true,

//   }
},
{timestamps:true}
  
);

const Users = mongoose.model("User", usersSchema);

export default Users;