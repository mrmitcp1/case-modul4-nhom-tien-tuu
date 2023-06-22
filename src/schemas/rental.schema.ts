import { Schema, model } from "mongoose";
const rentalSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
})
export const Rental = model('Rentals',rentalSchema)