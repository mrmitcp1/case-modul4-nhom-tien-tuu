"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropofLocaltion = void 0;
const mongoose_1 = require("mongoose");
const dropofLocaltionSchema = new mongoose_1.Schema({
    dropofLocaltion_name: String,
    drop_time: Date,
});
exports.DropofLocaltion = (0, mongoose_1.model)("DropofLocaltions", dropofLocaltionSchema);
//# sourceMappingURL=dropoflocaltion.schema.js.map