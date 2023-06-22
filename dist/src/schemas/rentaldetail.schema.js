"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalDetail = void 0;
const mongoose_1 = require("mongoose");
const rentalDetailSchema = new mongoose_1.Schema({
    car_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Cars" },
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    total_cost: Number,
});
exports.RentalDetail = (0, mongoose_1.model)("RentaDetails", rentalDetailSchema);
//# sourceMappingURL=rentaldetail.schema.js.map