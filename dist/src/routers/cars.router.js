"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const express_1 = require("express");
const cars_controller_1 = __importDefault(require("../controllers/cars.controller"));
const carRouter = (0, express_1.Router)();
carRouter.get("/admin/create", cars_controller_1.default.showCreateForm);
carRouter.post("/admin/create", upload.array("img", 10), cars_controller_1.default.createCar);
exports.default = carRouter;
//# sourceMappingURL=cars.router.js.map