import { Schema, model } from "mongoose";
const localSchema = new Schema({
    local_city: String,
    address: String
});
export const Local = model('Locals',localSchema)