import { Schema, model } from "mongoose";
const pickupLocaltionSchema = new Schema({
    pickupLocation_name: String,
    pickup_time: Date
});
export const PickupLocaltion = model('PickupLocaltions',pickupLocaltionSchema)