import { Schema, model } from "mongoose";
const dropofLocaltionSchema = new Schema({
    localtion_id: {type:Schema.Types.ObjectId,ref:'Locals'},
    dropofLocaltion_name: String
});
export const DropofLocaltion = model('DropofLocaltions',dropofLocaltionSchema)