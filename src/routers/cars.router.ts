import express from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

import { Router } from "express";
import CarController from "../controllers/cars.controller";
const carRouter = Router();

carRouter.get("/admin/create", CarController.showCreateForm);
carRouter.post(
  "/admin/create",
  upload.array("img", 10),
  CarController.createCar
);
carRouter.get("/cars/list", CarController.showAllCar);

export default carRouter;
