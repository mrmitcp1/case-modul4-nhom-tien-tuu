import { Schema, model } from "mongoose";
const pickupLocaltionSchema = new Schema({
    localtion_id: {type:Schema.Types.ObjectId,ref:'Locals'},
    pickupLocation_name: String
});
export const PickupLocaltion = model('PickupLocaltions',pickupLocaltionSchema)