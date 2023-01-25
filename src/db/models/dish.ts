import mongoose from "mongoose";

const dishsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price:{
        type: Number,
      required: true,

    },
    id:
    {
        type: Number,
        required: true,

    },
  },
  { timestamps: true }
);

const dishs = mongoose.model("Dishs", dishsSchema);

export default dishs;
