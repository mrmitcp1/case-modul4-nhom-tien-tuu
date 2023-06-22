"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Users" },
    car_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Cars" },
    review_comment: [String],
});
exports.Review = (0, mongoose_1.model)("Reviews", reviewSchema);
//# sourceMappingURL=review.schema.js.map