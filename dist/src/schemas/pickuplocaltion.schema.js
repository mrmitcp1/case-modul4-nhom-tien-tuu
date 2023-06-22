"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupLocaltion = void 0;
const mongoose_1 = require("mongoose");
const pickupLocaltionSchema = new mongoose_1.Schema({
    pickupLocaltion_name: String,
});
exports.PickupLocaltion = (0, mongoose_1.model)('PickupLocaltions', pickupLocaltionSchema);
//# sourceMappingURL=pickuplocaltion.schema.js.map