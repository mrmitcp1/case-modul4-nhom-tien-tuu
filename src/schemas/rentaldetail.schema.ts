import { Schema, model } from "mongoose";
const rentalDetailSchema = new Schema({
  car_id: { type: Schema.Types.ObjectId, ref: "Cars" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  datePickup: Date,
  dateDrop: Date,
  total_cost: Number,
});
export const RentalDetail = model("RentalDetails", rentalDetailSchema);

