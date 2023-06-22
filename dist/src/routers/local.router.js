"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const local_controller_1 = __importDefault(require("../controllers/local.controller"));
const localRouter = (0, express_1.Router)();
localRouter.get('/createlocals', upload.none(), local_controller_1.default.getCreateLocal);
localRouter.post('/createlocals', upload.none(), local_controller_1.default.createLocals);
localRouter.get('/listlocals', upload.none(), local_controller_1.default.getListLocal);
localRouter.get('/:id/delete', upload.none(), local_controller_1.default.deleteLocal);
localRouter.get('/update/:id', upload.none(), local_controller_1.default.getUpdateLocal);
localRouter.post('/update/:id', upload.none(), local_controller_1.default.updateLocal);
exports.default = localRouter;
//# sourceMappingURL=local.router.js.map