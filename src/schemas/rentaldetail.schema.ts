import { Schema, model } from "mongoose";
const rentalDetailSchema = new Schema({
  car_id: { type: Schema.Types.ObjectId, ref: "Cars" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  pick_time: Date,
  drop_time: Date,
  total_cost: Number,
});
export const RentalDetail = model("RentaDetails", rentalDetailSchema);
