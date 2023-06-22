"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const mongoose_1 = require("mongoose");
const rentalSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
});
exports.Rental = (0, mongoose_1.model)('Rentals', rentalSchema);
//# sourceMappingURL=rental.schema.js.map