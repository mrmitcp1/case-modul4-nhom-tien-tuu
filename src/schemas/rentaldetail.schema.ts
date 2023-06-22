import { Schema, model } from "mongoose";
const rentalDetailSchema = new Schema({
    rental_id: {type:Schema.Types.ObjectId,ref:'Rentals'},
    car_id: {type:Schema.Types.ObjectId,ref:'Cars'},
    pick_up_date: Date,
    time_pick_up: Date,
    drop_of_date: Date,
    time_drop_of: Date,
    total_cost: Number
});
export const RentalDetail =  model('RentaDetails',rentalDetailSchema)