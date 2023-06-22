import { Schema, model } from "mongoose";
const imageSchema = new Schema({
    car_id: {type:Schema.Types.ObjectId,ref:'Cars'},
    url_image : String,
})
export const Image = model('Images',imageSchema)