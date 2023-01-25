import { json } from "body-parser";
import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    dateAdded: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    workHours: {
      type: JSON,
      required: true,
    },
    visits: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;
