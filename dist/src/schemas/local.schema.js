"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const mongoose_1 = require("mongoose");
const localSchema = new mongoose_1.Schema({
    local_city: String,
    address: String
});
exports.Local = (0, mongoose_1.model)('Locals', localSchema);
//# sourceMappingURL=local.schema.js.map