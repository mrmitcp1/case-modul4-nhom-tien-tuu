"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalDetail = void 0;
const mongoose_1 = require("mongoose");
const rentalDetailSchema = new mongoose_1.Schema({
    rental_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Rentals' },
    car_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cars' },
    pick_up_date: Date,
    time_pick_up: Date,
    drop_of_date: Date,
    time_drop_of: Date,
    total_cost: Number
});
exports.RentalDetail = (0, mongoose_1.model)('RentaDetails', rentalDetailSchema);
//# sourceMappingURL=rentaldetail.schema.js.map