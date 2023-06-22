import { Schema, model } from "mongoose";
const dropofLocaltionSchema = new Schema({
    dropofLocaltion_name: String,
    drop_time: Date,
});
export const DropofLocaltion = model('DropofLocaltions',dropofLocaltionSchema)