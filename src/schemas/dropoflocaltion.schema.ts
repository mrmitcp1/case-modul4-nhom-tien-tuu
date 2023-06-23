import { Schema, model } from "mongoose";
const dropofLocaltionSchema = new Schema({
    dropofLocaltion_name: String,
});
export const DropofLocaltion = model("DropofLocaltions", dropofLocaltionSchema);
