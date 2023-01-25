import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://mohamadsawaed:bmw*1234@epicuredb.gd1fsch.mongodb.net/epicureDB");
};

export { connectDb };
