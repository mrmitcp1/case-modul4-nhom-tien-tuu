import { Schema, model } from "mongoose";

const carSchema = new Schema({
  pickup: { type: Schema.Types.ObjectId, ref: "PickupLocaltions" },
  drop: { type: Schema.Types.ObjectId, ref: "DropofLocaltions" },
  car_brand: String,
  car_model: String,
  car_type: String,
  car_gear: String,
  car_licensePlate: String,
  car_year: String,
  car_color: String,
  car_rentalPrice: Number,
  car_availability: String,
  car_img: [String],
  car_seat: Number,
});
export const Car = model("Cars", carSchema);
