"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    pickup: { type: mongoose_1.Schema.Types.ObjectId, ref: "PickupLocaltions" },
    drop: { type: mongoose_1.Schema.Types.ObjectId, ref: "DropofLocaltions" },
    car_brand: String,
    car_model: String,
    car_type: String,
    car_gear: String,
    car_licensePlate: String,
    car_year: String,
    car_color: String,
    car_rentalPrice: Number,
    car_availability: String,
    car_img: [String],
    car_seat: Number,
});
exports.Car = (0, mongoose_1.model)("Cars", carSchema);
//# sourceMappingURL=car.schema.js.map