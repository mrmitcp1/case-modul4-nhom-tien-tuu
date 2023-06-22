import { Schema, model } from "mongoose";

const carSchema = new Schema({
    locals:{ type: Schema.Types.ObjectId, ref: 'Locals' },
    car_brand: String,
    car_model: String,
    car_licensePlate : String,
    car_year: String,
    car_color: String,
    car_rentalPrice: Number,
    car_availability: String
});
export const Car = model('Cars',carSchema)