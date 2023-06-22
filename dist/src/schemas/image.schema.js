"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    car_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cars' },
    url_image: String,
});
exports.Image = (0, mongoose_1.model)('Images', imageSchema);
//# sourceMappingURL=image.schema.js.map