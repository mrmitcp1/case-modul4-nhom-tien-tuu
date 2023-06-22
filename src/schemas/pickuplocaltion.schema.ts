import { Schema, model } from "mongoose";
const pickupLocaltionSchema = new Schema({
    pickupLocaltion_name: String,
});
export const PickupLocaltion = model('PickupLocaltions',pickupLocaltionSchema)