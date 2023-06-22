"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropofLocaltion = void 0;
const mongoose_1 = require("mongoose");
const dropofLocaltionSchema = new mongoose_1.Schema({
    localtion_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Locals' },
    dropofLocaltion_name: String
});
exports.DropofLocaltion = (0, mongoose_1.model)('DropofLocaltions', dropofLocaltionSchema);
//# sourceMappingURL=dropoflocaltion.schema.js.map