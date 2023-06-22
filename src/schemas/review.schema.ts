import { Schema, model } from "mongoose";
const reviewSchema = new Schema({
    user_id: {type:Schema.Types.ObjectId,ref:'Users'},
    car_id: {type:Schema.Types.ObjectId,ref:'Cars'},
    review_comment : [String]
})
export const Review = model('Reviews',reviewSchema)