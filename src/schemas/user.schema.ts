import { Schema, model } from "mongoose";
const userSchema = new Schema({
    user_name: String,
    user_email: String,
    user_password: String,
    user_phone: String,
    user_address: String,
    user_role: String,

});
export const User = model('User',userSchema)